export function useNLBLibraries() {
  function RSSThing() {
    const API_URL = "http://localhost:3001/api/libraries"; // Adjust as needed

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Process your data here
      })
      .catch((error) => console.error("Error fetching libraries:", error));
  }

  return { RSSThing };
}
