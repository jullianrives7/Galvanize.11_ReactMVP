import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { appContext } from "../App";

const SampleListBtn = () => {
  const {
    setCurrentListName,
    setCurrentListData,
    sampleListData,
    setIsNewList,
    setIsActiveList,
    setShowOffCanvasMenu,
  } = useContext(appContext);

  const handleClick = () => {
    setCurrentListData(sampleListData);
    setIsNewList(false);
    setIsActiveList(true);
    setShowOffCanvasMenu(false);
  };

  return (
    <Button variant="outline-secondary btn-sm me-2" onClick={handleClick}>
      Sample List
    </Button>
  );
};

export default SampleListBtn;
