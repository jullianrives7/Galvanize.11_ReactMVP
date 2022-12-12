import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { appContext } from "../App";

const AddItemModal = () => {
  const {
    showAddItemModal,
    setShowAddItemModal,
    newItem,
    setNewItem,
    ApiUrl,
    setIsNewList,
    getAndSetCurrentList,
    setChangeMade,
    currentListData,
  } = useContext(appContext);

  const handleHide = () => setShowAddItemModal(false);

  const recordNewItem = (e) => {
    setNewItem(e.target.value);
  };

  const saveNewItem = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      fetch(`${ApiUrl}/api/${currentListData.title}/${newItem}/false`, {
        method: "POST",
      })
        .then(console.log("new list item created"))
        .then(getAndSetCurrentList(currentListData.title))
        .then(setIsNewList(false))
        .then(handleHide())
        .then(setChangeMade(true));
    }
  };

  return (
    <Modal show={showAddItemModal} onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>New List Item</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="New Item"
            onChange={recordNewItem}
            onKeyPress={saveNewItem}
          ></input>
          <label for="floatingInput">Enter Item Description</label>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Close
        </Button>
        <Button variant="success" onClick={saveNewItem}>
          Save Item
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItemModal;
