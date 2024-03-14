import("express")
  .then(({ default: express }) => {
    // Import cors dynamically
    import("cors")
      .then(({ default: cors }) => {
        const app = express();
        app.use(cors()); // Use cors middleware for enabling CORS

        const PORT = 3001; // You can use any port that suits your setup

        app.get("/api/libraries", async (req, res) => {
          const RSS_URL = "https://eservice.nlb.gov.sg/rss/libraries";

          // Import node-fetch dynamically
          const fetch = (...args) =>
            import("node-fetch").then(({ default: fetch }) => fetch(...args));
          // Import xmldom dynamically for DOMParser
          const { DOMParser } = await import("xmldom");

          try {
            const response = await fetch(RSS_URL);
            const responseBody = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(responseBody, "text/xml");

            const items = xmlDoc.getElementsByTagName("item");
            let libraries = [];

            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              let library = {
                title: item.getElementsByTagName("title")[0]?.textContent,
                operatingHours:
                  item.getElementsByTagName("operatingHours")[0]?.textContent,
                description:
                  item.getElementsByTagName("description")[0]?.textContent,
                address: item.getElementsByTagName("address")[0]?.textContent,
                georssPoint:
                  item.getElementsByTagName("georss:point")[0]?.textContent,
              };
              libraries.push(library);
            }

            res.json(libraries);
          } catch (error) {
            console.error("Error fetching or parsing:", error);
            res.status(500).send("Error fetching library data");
          }
        });

        app.listen(PORT, () =>
          console.log(`Server running on http://localhost:${PORT}`)
        );
      })
      .catch((err) => console.error("Failed to load cors", err));
  })
  .catch((err) => console.error("Failed to load express", err));
