const parser = require("rss-url-parser");

export default async function getLibraries() {
  const feed = await parser("https://eservice.nlb.gov.sg/rss/libraries");
  const libData = [];
  feed.forEach((item) => {
    libData.push({
      libName: item.title,
      libAddress: item["rss:address"]["#"],
      libCoords: item["georss:point"]["#"].split(" "),
      libOpenHours: item["rss:operatinghours"]["#"],
    });
  });

  console.log(libData);
}
