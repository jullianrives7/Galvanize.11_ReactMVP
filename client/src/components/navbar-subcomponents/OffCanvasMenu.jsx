import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import CreateNewListBtn from "../buttons/CreateNewListBtn";
import SampleListBtn from "../buttons/SampleListBtn";
import DropdownMenu from "./DropdownMenu";
import { useContext } from "react";
import { appContext } from "../App";

const OffCanvasMenu = () => {
  const { showOffCanvasMenu, setShowOffCanvasMenu } = useContext(appContext);
  const handleHide = () => {
    setShowOffCanvasMenu(false);
  };

  return (
    <Navbar.Offcanvas
      id="offcanvasNavbar-expand-md"
      aria-labelledby="offcanvasNavbarLabel-expand-md"
      placement="end"
      show={showOffCanvasMenu}
      onHide={handleHide}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
          Menu
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <CreateNewListBtn />
          <SampleListBtn />
          <DropdownMenu />
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  );
};

export default OffCanvasMenu;
