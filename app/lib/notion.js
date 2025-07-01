import { Client } from "@notionhq/client";

export async function getAllNews() {
    const resp = await notion.databases.query({
      database_id: process.env.NOTION_NEWS_DB_ID,
      sorts: [{ property: "Date", direction: "descending" }],
    });
}