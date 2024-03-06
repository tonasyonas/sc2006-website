import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function StyledNavbar() {
  return (
    <Navbar bg="light" expand="lg" data-bs-theme="light" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Bookworm
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/search">
            Search
          </Nav.Link>
          <Nav.Link as={Link} to="/bookdetails">
            Book Details
          </Nav.Link>
          <Nav.Link as={Link} to="/map">
            Map
          </Nav.Link>
          <Nav.Link as={Link} to="/account">
            Account
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default StyledNavbar;
