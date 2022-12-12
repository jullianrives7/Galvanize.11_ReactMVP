import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Row from "./list-subcomponents/Row";
import AddNewItemBtn from "./buttons/AddNewItemBtn";
import ToggleHideBtn from "./buttons/ToggleHideBtn";
import EmptyListStatement from "./list-subcomponents/EmptyListStatement";
import { useContext } from "react";
import { appContext } from "./App";

const List = () => {
  const {
    currentListData,
    isNewList,
    changeMade,
    setChangeMade,
    hideCompleted,
    splitAndCapListTitle,
  } = useContext(appContext);

  if (changeMade === true) {
    setChangeMade(false);
  }

  return (
    <Container>
      {splitAndCapListTitle(currentListData.title)}
      <Table striped bordered hover>
        <tbody>
          {isNewList === true || currentListData.items.length === 0 ? (
            <EmptyListStatement />
          ) : (
            currentListData.items.map((listItem, i) => {
              if (
                hideCompleted === true &&
                listItem.completion_status === false
              ) {
                return <Row key={i} listItem={listItem} />;
              } else if (hideCompleted === false) {
                return (
                  <Row
                    key={i}
                    listItem={listItem}
                    parentTable={currentListData.title}
                  />
                );
              }
            })
          )}
        </tbody>
      </Table>
      <div class="listBtnsContainer">
        <AddNewItemBtn />
        <ToggleHideBtn />
      </div>
    </Container>
  );
};

export default List;
