import { Client } from "@notionhq/client";

/**
 * Queries the Notion news database and retrieves all entries sorted by date in descending order.
 */
export async function getAllNews() {
    const resp = await notion.databases.query({
      database_id: process.env.NOTION_NEWS_DB_ID,
      sorts: [{ property: "Date", direction: "descending" }],
    });
}