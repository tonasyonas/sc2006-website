export function useTitleSearch() {
  const url =
    "https://openweb.nlb.gov.sg/api/v2/Catalogue/GetTitles?Keywords=Singapore";
  const apiKey = "oDFUaeOx`uaqwC4i5els^GB;W`>HD9OD";
  const appCode = "DEV-ChongJiejun";

  const headers = new Headers({
    "X-Api-Key": apiKey,
    "X-App-Code": appCode,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with your fetch operation:" + error);
    }
  };

  return { fetchData };
}
