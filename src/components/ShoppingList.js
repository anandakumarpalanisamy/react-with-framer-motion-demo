import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import ListForm from "./ListForm";
import List from './List';

const ShoppingList = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) setItems(storedItems);
  }, [])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addListItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newListItem = [item, ...items];
    setItems(newListItem);
  }

  const removeItem = (id) => {
    setItems((prevItems) => {
      [...prevItems].filter((item) => item.id !== id);
    });
  }

  return (
    <div>
      <motion.h1 initial={{ opacity: 0  }} animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        Shopping List
      </motion.h1>
      <ListForm onSubmit={addListItem} />
      <List items={items} removeItem={removeItem} reOrderList={setItems} />
    </div>
  );
}

export default ShoppingList;
