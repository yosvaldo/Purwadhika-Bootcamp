import { useEffect, useState } from "react"
import ToDoListCard from "./components/cards/ToDoListCard"
import Header from "./components/header/Header"
import { TTodoList } from "./models/to-do-item.model"
import ToDoListData from "./data/to-do-list.data"
import type IToDoItem from "./models/to-do-item.model"

export function App() {
  const [todoList, setTodoList] = useState<TTodoList>(ToDoListData);
  const handleAddItem = (title: string, done: boolean) => {
    const lastItemIndex = todoList.length - 1;
    const newItem: IToDoItem = {
      id: todoList.length > 0 ? todoList[lastItemIndex].id + 1 : 1,
      title,
      isDone: done
    };
    setTodoList((prevList) => [...prevList, newItem]);
  };

  useEffect(() => {
    document.title = `TO DO List | ${todoList.length} items`;
    return () => {
      console.log("useEffect cleanup");
    };
  }, [todoList]);

  return (
    <main>
      <Header onCreate={handleAddItem} />
      <div className="relative -top-12 z-30 container mx-auto max-w-135.25">
        <ToDoListCard data={todoList} />
      </div>
    </main>
  )
}

export default App