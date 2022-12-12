import { useContext } from "react";
import { appContext } from "../App";

const TrashCanBtn = (props) => {
  const {
    ApiUrl,
    setChangeMade,
    currentListData,
    setCurrentListData,
    currentListIndex,
    getAndSetCurrentList,
  } = useContext(appContext);

  // let titleToLowercaseAndSpacesTo_ = (tableName) => {
  //   let splitWordArr = tableName.split(" ");
  //   for (var i = 0; i < splitWordArr.length; i++) {
  //     splitWordArr[i] = splitWordArr[i].toLowerCase();
  //   }
  //   let resultText = splitWordArr.join("_");
  //   return resultText;
  // };

  const handleClick = (e) => {
    // let tableName = titleToLowercaseAndSpacesTo_(props.tableName);
    let row_id = e.target.name;
    // console.log(row_id);
    // console.log(tableName);

    fetch(`${ApiUrl}/api/${currentListData.title}/${row_id}`, {
      method: "DELETE",
    })
      .then(console.log("list item deleted"))
      .then(getAndSetCurrentList(currentListData.title))
      .then(getAndSetCurrentList(currentListData.title))
      .then(setChangeMade(true));
  };

  return (
    <img
      src="../src/assets/images/trash-outline.svg"
      id="del-row-svg"
      width="30"
      height="30"
      name={props.id}
      onClick={handleClick}
    ></img>
  );
};

export default TrashCanBtn;
