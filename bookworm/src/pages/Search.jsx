import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useTitleSearch } from "../hooks/useTitleSearch";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const { fetchData } = useTitleSearch();
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search Books</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={fetchData}>
        Search
      </Button>
    </Form>
  );
}

export default Search;
