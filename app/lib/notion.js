import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });


export async function getAllNews() {
  // Query the News database in Notion and return a simplified
  // array that the front-end can consume directly.
  //
  // Expected database schema:
  // ├─ Title   → title property (required)
  // ├─ Date    → date property  (required)
  // └─ Excerpt → rich text (optional)

  const resp = await notion.databases.query({
    database_id: process.env.NOTION_NEWS_DB_ID,
    // Sort by the date property (case-sensitive field name in Notion)
    sorts: [{ property: "Date", direction: "descending" }],
  });

  // Map the Notion API response into a flat structure.
  return resp.results.map((page) => {
    const { properties } = page;

    // Fallback to a property named "Name" if "Title" doesn't exist
    const title =
      properties.Title?.title?.[0]?.plain_text ??
      properties.Name?.title?.[0]?.plain_text ??
      "Untitled";
    const date = properties.Date?.date?.start ?? null;
    const excerpt = properties.Excerpt?.rich_text?.[0]?.plain_text ?? "";

    // Prefer page cover, fallback to a property named "Image" of type files
    let image =
      page.cover?.external?.url ||
      page.cover?.file?.url ||
      properties.Image?.files?.[0]?.external?.url ||
      properties.Image?.files?.[0]?.file?.url ||
      null;

    return {
      id: page.id,
      title,
      date,
      excerpt: excerpt || null,
      image,
    };
  });
}

// Fetch a single news item using its Notion page ID
export async function getNewsById(id) {
  if (!id) throw new Error("getNewsById requires a Notion page ID");

  const page = await notion.pages.retrieve({ page_id: id });

  const { properties } = page;

  const excerpt = properties.Excerpt?.rich_text?.[0]?.plain_text ?? "";

  // Prefer page cover, fallback to a property named "Image" of type files
  let image =
    page.cover?.external?.url ||
    page.cover?.file?.url ||
    properties.Image?.files?.[0]?.external?.url ||
    properties.Image?.files?.[0]?.file?.url ||
    null;

  return {
    id: page.id,
    title:
      properties.Title?.title?.[0]?.plain_text ??
      properties.Name?.title?.[0]?.plain_text ??
      "Untitled",
    date: properties.Date?.date?.start ?? null,
    excerpt: excerpt || null,
    image,
  };
}