import Button from "react-bootstrap/esm/Button";
import { useContext } from "react";
import { appContext } from "../App";

const AddNewItemBtn = () => {
  const { setShowAddItemModal } = useContext(appContext);
  const handleClick = () => {
    setShowAddItemModal(true);
  };

  return (
    <Button variant="warning" id="add-item-btn" onClick={handleClick}>
      Add New Item
    </Button>
  );
};

export default AddNewItemBtn;
