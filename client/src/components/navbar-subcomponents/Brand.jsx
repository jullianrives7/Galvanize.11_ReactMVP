import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { appContext } from "../App";

const Brand = () => {
  const { loadHome } = useContext(appContext);

  return (
    <Navbar.Brand href="#" onClick={loadHome}>
      <img
        src="../src/assets/images/logo.jpeg"
        alt="Logo"
        width="30"
        height="30"
        class="d-inline-block align-text-top"
      ></img>
      <font size="5">
        <b>MiLISTEE &trade;</b>
      </font>{" "}
      <font size="2">
        <i>...the "to-do" list app</i>
      </font>
    </Navbar.Brand>
  );
};

export default Brand;
