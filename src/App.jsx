import "./App.css";
import { List } from "./components/List";
import { AddItem } from "./components/AddItem";
import { useState } from "react";
import { HowMany } from "./HowMany";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <List
          shoppingItems={shoppingList}
          onRemoveItem={(item) =>
            setShoppingList(shoppingList.filter((list) => list !== item))
          }
        />
        <AddItem
          onAdd={(newItem) => setShoppingList((oldSL) => [...oldSL, newItem])}
        />

        <HowMany itemList={shoppingList} />
      </header>
    </div>
  );
}

export default App;
