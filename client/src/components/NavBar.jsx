import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Brand from "./navbar-subcomponents/Brand";
import HamburgerMenu from "./navbar-subcomponents/HamburgerMenu";
import OffCanvasMenu from "./navbar-subcomponents/OffCanvasMenu";

const NavBar = () => (
  <Navbar key="lg" bg="light" expand="md" className="mb-3">
    <Container fluid>
      <Brand />
      <HamburgerMenu />
      <OffCanvasMenu />
    </Container>
  </Navbar>
);

export default NavBar;
