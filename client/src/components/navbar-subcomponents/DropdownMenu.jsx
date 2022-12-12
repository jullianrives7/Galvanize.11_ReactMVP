import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { appContext } from "../App";

const DropdownMenu = () => {
  const {
    loadHome,
    setShowContactModal,
    setShowSavedListsModal,
    setShowOffCanvasMenu,
    savedListsData,
    ApiUrl,
    setAllListsData,
    allListsData,
    setChangeMade,
  } = useContext(appContext);
  const displayCm = () => {
    setShowContactModal(true);
    setShowOffCanvasMenu(false);
  };
  const displaySlm = () => {
    setShowSavedListsModal(true);
    setShowOffCanvasMenu(false);
    // setChangeMade(true);
    // savedListsData.map((list) => {
    //   console.log(list);
    //   fetch(ApiUrl + `/api/${list.tablename}`)
    //     .then((response) => response.json())
    //     .then((data) => setAllListsData([...allListsData, data]));
    // });
  };

  return (
    <NavDropdown
      title="More"
      id="offcanvasNavbarDropdown-expand-lg"
      align="end"
    >
      <NavDropdown.Item onClick={loadHome}>Home</NavDropdown.Item>
      <NavDropdown.Item onClick={displayCm}>Contact</NavDropdown.Item>
      <NavDropdown.Item onClick={displaySlm}>Saved Lists</NavDropdown.Item>
    </NavDropdown>
  );
};

export default DropdownMenu;
