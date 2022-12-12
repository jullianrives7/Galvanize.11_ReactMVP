import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { useContext } from "react";
import { appContext } from "../App";

const SavedListSplitBtn = (props) => {
  const {
    ApiUrl,
    setChangeMade,
    savedListsData,
    getAndSetCurrentList,
    currentListData,
    allListsData,
    setCurrentListData,
    setCurrentListName,
    setIsNewList,
    setIsActiveList,
    setShowSavedListsModal,
    setCurrentListIndex,
    splitAndCapListTitle,
  } = useContext(appContext);

  const openList = () => {
    setCurrentListData({
      title: props.listData.tablename,
      items: allListsData[props.listIndex],
      index: props.listIndex,
    });
    getAndSetCurrentList(props.listData.tablename);
    setCurrentListIndex(props.listIndex);
    setIsNewList(false);
    setIsActiveList(true);
    setShowSavedListsModal(false);
  };

  const deleteList = (e) => {
    fetch(`${ApiUrl}/api/${e.target.id}`, {
      method: "DELETE",
    })
      .then(console.log(`list '${e.target.id}' deleted`))
      .then(setChangeMade(true));
  };

  return (
    <Dropdown as={ButtonGroup}>
      <Button variant="outline-success" onClick={openList}>
        {splitAndCapListTitle(props.listData.tablename)}
      </Button>

      <Dropdown.Toggle
        split
        variant="outline-danger"
        id="dropdown-split-basic"
      />

      <Dropdown.Menu>
        <Dropdown.Item id={props.listData.tablename} onClick={deleteList}>
          Delete This List
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SavedListSplitBtn;
