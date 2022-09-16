import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavHaapi = () => {
    return (
        <Navbar bg="light" expand="lg" className="nav-color">
        <Container>
          <Navbar.Brand href="#LoginPage">HAAPI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/Event">New Event</Nav.Link>
              <Nav.Link href="/Events">Events</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavHaapi;