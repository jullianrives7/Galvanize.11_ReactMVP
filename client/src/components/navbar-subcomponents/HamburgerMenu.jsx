import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { appContext } from "../App";

const HamburgerMenu = () => {
  const { setShowOffCanvasMenu } = useContext(appContext);
  const handleClick = () => {
    setShowOffCanvasMenu(true);
  };
  return (
    <Navbar.Toggle
      aria-controls="offcanvasNavbar-expand-lg"
      onClick={handleClick}
    />
  );
};

export default HamburgerMenu;
