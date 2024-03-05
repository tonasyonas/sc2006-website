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
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/bookings">
              Bookings
            </Nav.Link>
            <Nav.Link as={Link} to="/cabins">
              Cabins
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
}

export default StyledNavbar;
