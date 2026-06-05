import { useEffect, useState } from "react"
import ListCard from "./components/cards/ListCard"
import Header from "./components/header/Header"
import ToDoListData from "./data/to-do-list.data"
import type { TToDoFilter, TTodoList } from "./models/to-do-item.model"
import type IToDoItem from "./models/to-do-item.model"
import HCenteredContainer from "./components/container/HCenteredContainer"
import FilterTextButtons from "./components/buttons/FilterTextButtons"
import { Card } from "./components/ui/card"

export function App() {
  const [todoList, setTodoList] = useState<TTodoList>(ToDoListData)
  const [currentFilter, setCurrentFilter] = useState<TToDoFilter>("All")

  const filteredTodoList = todoList.filter((item) => {
    if (currentFilter === "Active") {
      return !item.isDone
    } else if (currentFilter === "Completed") {
      return item.isDone
    }
    return true
  })

  const incompleteTasksCount = todoList.filter((item) => !item.isDone).length

  const handleAddItem = (title: string, done: boolean) => {
    const lastItemIndex = todoList.length - 1
    const newItem: IToDoItem = {
      id: todoList.length > 0 ? todoList[lastItemIndex].id + 1 : 1,
      title,
      isDone: done,
    }
    setTodoList((prevList) => [...prevList, newItem])
  }

  const handleClearCompleted = () => {
    setTodoList((prevList) => prevList.filter((item) => !item.isDone))
  }

  const handleFilterChange = (filter: TToDoFilter) => {
    setCurrentFilter(filter)
  }

  const handleUpdateItem = (updatedItem: IToDoItem) => {
    setTodoList((prevList) =>
      prevList.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    )
  }

  const handleDeleteItem = (id: number) => {
    setTodoList((prevList) => prevList.filter((item) => item.id !== id))
  }

  useEffect(() => {
    console.log("useEffect is called")
    document.title = `T O D O L I S T | ${incompleteTasksCount} items left to be done.`
    return () => {
      console.log("useEffect cleanup is called")
    }
  }, [incompleteTasksCount])


  return (
    <main>
      <Header onCreate={handleAddItem} />
      <HCenteredContainer className="-top-8 md:-top-12">
        <ListCard
          data={filteredTodoList}
          taskCount={incompleteTasksCount}
          onFilterChange={handleFilterChange}
          onClearCompleted={handleClearCompleted}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
        />
        <Card className="mt-4 flex items-center justify-center py-1 md:hidden">
          <FilterTextButtons showOnMobile onFilterChange={handleFilterChange} />
        </Card>
      </HCenteredContainer>
    </main>
  )
}

export default App
