import { NextResponse } from "next/server";

let Parser = require("rss-parser");
let parser = new Parser({
  customFields: {
    item: ["title", "address", "georss:point", "operatingHours"],
  },
});

const RSSLibrariesURL = "https://eservice.nlb.gov.sg/rss/libraries";

/**
 * Retrieves library data from the RSS feed.
 * @returns {Promise<NextResponse>} The response containing the library data.
 */
export async function GET() {
  try {
    const feed = await parser.parseURL(RSSLibrariesURL);
    return NextResponse.json(feed);
  } catch (error) {
    console.log(error);
    return NextResponse.error(new Error("Failed to fetch library data"));
  }
}
