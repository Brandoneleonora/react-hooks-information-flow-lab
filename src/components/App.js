import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

 

  console.log(isDarkMode)
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={ function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }} button={isDarkMode}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
