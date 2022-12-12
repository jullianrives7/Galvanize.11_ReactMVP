import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { appContext } from "../App";

const CreateNewListBtn = (props) => {
  const { setShowSavedListsModal, setShowNewListModal } =
    useContext(appContext);

  const swapModals = () => {
    setShowSavedListsModal(false);
    setShowNewListModal(true);
  };

  const handleClick = (props) => {
    return props ? swapModals() : setShowNewListModal(true);
  };

  return (
    <Button
      variant="outline-success me-2"
      onClick={handleClick}
      aria-label="Hide"
    >
      Create New List
    </Button>
  );
};

export default CreateNewListBtn;
