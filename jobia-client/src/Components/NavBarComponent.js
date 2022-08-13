import { Navbar ,Nav,Container,NavDropdown,Button,Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import JobiaLogo from "../assets/Jobia_Logo.png";


function NavBarComponent() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">
        <Link to="/" class="navbar-brand">
            <img src={JobiaLogo} alt="" width="100%" height="24" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
           
            navbarScroll
          >
            <Nav.Link as={Link} to="/about">   About US</Nav.Link>
            <Nav.Link as={Link} to="/contact">  Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/register2">      Get a Job</Nav.Link>
            <Nav.Link as={Link} to="/register">    Hire Employees</Nav.Link>
            
           
          </Nav>
          <Form className="d-flex">
          <Link to="/login">
                <button
                  className="btn body-button-style1 padding-l-15 padding-r-15"
                  type="submit"
                >
                  Log in
                </button>
              </Link>
              &ensp;
              <Link to="/registrationOption">
                <button className="btn body-button-style" type="submit">
                  Register
                </button>
              </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
