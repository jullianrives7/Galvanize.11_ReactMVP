import Modal from "react-bootstrap/Modal";
import CreateNewListBtn from "../buttons/CreateNewListBtn";
import SavedListSplitBtn from "../buttons/SavedListSplitBtn";
import { useContext } from "react";
import { appContext } from "../App";

const SavedListsModal = () => {
  const {
    showSavedListsModal,
    setShowSavedListsModal,
    savedListsData,
    changeMade,
    setChangeMade,
    loadHome,
    setIsActiveList,
  } = useContext(appContext);

  const handleHide = () => {
    setShowSavedListsModal(false);
    loadHome();
  };

  if (changeMade === true) {
    setChangeMade(false);
  }

  // const resetAndDisplayMessage = () => {
  //   setIsActiveList(false);
  //   return <p>You currently don't have any saved lists.</p>;
  // };

  return (
    <Modal show={showSavedListsModal} onHide={handleHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Saved Lists</Modal.Title>
      </Modal.Header>

      <Modal.Body id="saved-lists-modal-body">
        {savedListsData.length === 1 ? (
          <p>You currently don't have any saved lists.</p>
        ) : (
          savedListsData.map((listData, i) => {
            if (listData.tablename != "sample_list") {
              return (
                <SavedListSplitBtn key={i} listData={listData} listIndex={i} />
              );
            }
          })
        )}
      </Modal.Body>

      <Modal.Footer>
        {savedListsData === undefined ? (
          console.log("saved lists exists")
        ) : (
          <CreateNewListBtn inModal={true} />
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default SavedListsModal;
