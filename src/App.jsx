import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Logo from "./Component/Logo";
import Form from "./Component/Form";
import Stats from "./Component/Stats";
import PackingList from "./Component/PackingList";

import "./App.css";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClear() {
    setItems([]);
  }
  return (
    <>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onToggleItem={handleToggle}
        onClearList={handleClear}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
