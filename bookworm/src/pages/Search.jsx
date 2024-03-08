import Button from "react-bootstrap/Button";

function Search() {
  return <Button onClick={
    fetch("https://eservice.nlb.gov.sg/rss/libraries")
  .then((response) => response.text())
  .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
  .then((data) => {
    console.log(data);
    const items = data.querySelectorAll("item");
    const libraryDict = {};
    items.forEach((el) => {
      libraryDict[el.querySelector("title")] = el.querySelector("georss:point");
    }>click test</Button>;
}

export default Search;
