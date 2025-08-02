import { Client } from "@notionhq/client";

if(!process.env.NOTION_TOKEN) {
  throw new Error("NOTION_TOKEN is not set");
}

const notion = new Client({ auth: process.env.NOTION_TOKEN });


export async function getAllNews(lang = null) {
  // Query the News database in Notion and return a simplified
  // array that the front-end can consume directly.
  //
  // Expected database schema:
  // ├─ Title   → title property (required)
  // ├─ Date    → date property  (required)
  // └─ Excerpt → rich text (optional)
  let resp;
  try {
    const queryParams = {
      database_id: process.env.NOTION_NEWS_DB_ID,
      sorts: [{ property: "Date", direction: "descending" }],
    };
    if (lang) {
      queryParams.filter = { property: "Lang", select: { equals: lang } };
    }
    resp = await notion.databases.query(queryParams);
  } catch (error) {
    console.error('Failed to fetch news from Notion:',error);
    return [];
  }


  // Map the Notion API response into a flat structure.
  return resp.results.map((page) => {
    const { properties } = page;

    // Fallback to a property named "Name" if "Title" doesn't exist
    const title =
      properties.Title?.title?.[0]?.plain_text ??
      properties.Name?.title?.[0]?.plain_text ??
      "Untitled";
    const date = properties.Date?.date?.start ?? null;
    const excerpt = properties.Excerpt?.rich_text?.map(rt => rt.plain_text).join("\n") || "";

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
  let page;
  try {
    page = await notion.pages.retrieve({ page_id: id });
  } catch (error) {
    console.error('Failed to fetch news from Notion:',error);
    return null;
  }

  const { properties } = page;

  const excerpt = properties.Excerpt?.rich_text?.map(rt => rt.plain_text).join("\n") || "";

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