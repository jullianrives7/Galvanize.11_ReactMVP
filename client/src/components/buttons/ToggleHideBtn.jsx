import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { appContext } from "../App";

const ToggleHideBtn = () => {
  const { hideCompleted, setHideCompleted } = useContext(appContext);

  const handleClick = () => {
    if (hideCompleted === true) {
      setHideCompleted(false);
    } else {
      setHideCompleted(true);
    }
  };

  return (
    <Button variant="success" id="save-changes-btn" onClick={handleClick}>
      {hideCompleted === true ? "Show Completed" : "Hide Completed"}
    </Button>
  );
};

export default ToggleHideBtn;
