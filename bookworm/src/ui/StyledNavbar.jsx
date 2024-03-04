import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function StyledNavbar() {
  return (
    <Navbar bg="light" expand="lg" data-bs-theme="light" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
}

export default StyledNavbar;
