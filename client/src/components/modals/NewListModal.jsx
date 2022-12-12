import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { appContext } from "../App";

const NewListModal = () => {
  const {
    showNewListModal,
    setShowNewListModal,
    title,
    setTitle,
    ApiUrl,
    setIsNewList,
    setIsActiveList,
    setCurrentListName,
    setCurrentListData,
    setShowOffCanvasMenu,
    setChangeMade,
  } = useContext(appContext);

  const handleHide = () => setShowNewListModal(false);

  let titleToLowercaseAndSpacesTo_ = () => {
    let splitWordArr = title.split(" ");
    for (var i = 0; i < splitWordArr.length; i++) {
      splitWordArr[i] = splitWordArr[i].toLowerCase();
    }
    let resultText = splitWordArr.join("_");
    return resultText;
  };

  const recordTitle = (e) => {
    setTitle(e.target.value);
  };

  const submitTitle = (e) => {
    e.key === "Enter" || e.type === "click"
      ? fetch(`${ApiUrl}/api/new_td_list/${titleToLowercaseAndSpacesTo_()}`, {
          method: "POST",
        })
          .then(console.log(`new list '${title}' created`))
          // .then(setCurrentListName(title))
          // .then(setTitle(titleToLowercaseAndSpacesTo_))
          .then(
            setCurrentListData({
              title: titleToLowercaseAndSpacesTo_(),
              items: [],
              index: "",
            })
          )
          .then(handleHide())
          .then(setIsNewList(true))
          .then(setIsActiveList(true))
          .then(setChangeMade(true))
          .then(setShowOffCanvasMenu(false))
      : "";
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <Modal show={showNewListModal} onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>New "To-Do" List Title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Title"
            onChange={recordTitle}
            onKeyPress={submitTitle}
          ></input>
          <label for="floatingInput">Enter Title</label>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Close
        </Button>
        <Button variant="primary" onClick={submitTitle}>
          Save & Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewListModal;
