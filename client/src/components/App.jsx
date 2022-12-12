import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Body from "./Body";
import List from "./List";
import ContactModal from "./modals/ContactModal";
import NewListModal from "./modals/NewListModal";
import SavedListsModal from "./modals/SavedListsModal";
import AddItemModal from "./modals/AddItemModal";

const App = () => {
  const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false);
  const [showNewListModal, setShowNewListModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSavedListsModal, setShowSavedListsModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [savedListsData, setSavedListsData] = useState([]);
  const [allListsData, setAllListsData] = useState([]);
  const [sampleListData, setSampleListData] = useState();
  const [currentListIndex, setCurrentListIndex] = useState();
  const [currentListData, setCurrentListData] = useState();
  const [currentListName_dbFormat, setCurrentListName_dbFormat] = useState();
  const [title, setTitle] = useState();
  const [isActiveList, setIsActiveList] = useState(false);
  const [isNewList, setIsNewList] = useState(false);
  const [newItem, setNewItem] = useState();
  const [changeMade, setChangeMade] = useState(false);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [listIndex, setListIndex] = useState(0);

  let ApiUrl = "http://localhost:3001";

  const loadHome = () => {
    setShowOffCanvasMenu(false);
    setIsActiveList(false);
  };

  const splitAndCapListTitle = (str) => {
    let splitWordArr = str.split("_");
    for (var i = 0; i < splitWordArr.length; i++) {
      splitWordArr[i] =
        splitWordArr[i].charAt(0).toUpperCase() + splitWordArr[i].slice(1);
    }
    let resultText = splitWordArr.join(" ");
    return resultText;
  };

  const getAndSetCurrentList = (listName) => {
    fetch(ApiUrl + `/api/${listName}`)
      .then((response) => response.json())
      .then((data) => setCurrentListData({ title: listName, items: data }));
    // .then(setIsActiveList(true));
  };

  const contextData = {
    showOffCanvasMenu,
    setShowOffCanvasMenu,
    showNewListModal,
    setShowNewListModal,
    showContactModal,
    setShowContactModal,
    showSavedListsModal,
    setShowSavedListsModal,
    showAddItemModal,
    setShowAddItemModal,
    savedListsData,
    setSavedListsData,
    allListsData,
    setAllListsData,
    sampleListData,
    setSampleListData,
    isActiveList,
    setIsActiveList,
    isNewList,
    setIsNewList,
    title,
    setTitle,
    newItem,
    setNewItem,
    // currentListName,
    // setCurrentListName,
    currentListIndex,
    setCurrentListIndex,
    currentListData,
    setCurrentListData,
    loadHome,
    getAndSetCurrentList,
    ApiUrl,
    changeMade,
    setChangeMade,
    hideCompleted,
    setHideCompleted,
    currentListName_dbFormat,
    setCurrentListName_dbFormat,
    splitAndCapListTitle,
    listIndex,
    setListIndex,
  };

  useEffect(() => {
    fetch(ApiUrl + "/api/sample_list")
      .then((response) => response.json())
      .then((data) =>
        setSampleListData({
          title: "sample_list",
          items: data,
          index: 0,
        })
      );
  }, []);

  useEffect(() => {
    fetch(ApiUrl + "/api/get_all_lists")
      .then((response) => response.json())
      .then((data) => setSavedListsData(data));
  }, []);

  useEffect(() => {
    fetch(ApiUrl + "/api/get_all_lists")
      .then((response) => response.json())
      .then((data) => setSavedListsData(data));
  }, [changeMade]);

  // useEffect(() => {
  //   fetch(ApiUrl + `/api/${currentListData.title}`)
  //     .then((response) => response.json())
  //     .then((data) => setCurrentListData(data))
  //     .then(setChangeMade(false));
  // }, [changeMade]);

  useEffect(() => {
    savedListsData.map((list) => {
      console.log("listName: ", list.tablename);
      fetch(ApiUrl + `/api/${list.tablename}`)
        .then((response) => response.json())
        .then((data) => setAllListsData((prev) => [...prev, data]));
    });
  }, [savedListsData]);

  // .then(setAllListsData([]))

  console.log("currentListData: ", currentListData);
  console.log("sampleListData: ", sampleListData);
  console.log("listIndex: ", listIndex);
  console.log("savedListsData: ", savedListsData);
  console.log("allListsData: ", allListsData);
  console.log("changeMade: ", changeMade);

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div className="App">
        <NavBar />
        {isActiveList === false ? <Body /> : <List />}
        <ContactModal />
        <NewListModal />
        <SavedListsModal />
        <AddItemModal />
      </div>
    </appContext.Provider>
  );
};

export const appContext = React.createContext();
export default App;
