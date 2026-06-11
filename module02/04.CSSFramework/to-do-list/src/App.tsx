import { useEffect, useState } from "react"
import ListCard from "./components/cards/ListCard"
import Header from "./components/header/Header"
import ToDoListData from "./data/to-do-list.data"
import type { TToDoFilter, TTodoList, TToDoSort } from "./models/to-do-item.model"
import type IToDoItem from "./models/to-do-item.model"
import HCenteredContainer from "./components/container/HCenteredContainer"
import FilterTextButtons from "./components/buttons/FilterTextButtons"
import { Card } from "./components/ui/card"
import { Input } from "./components/ui/input"

export function App() {
  const [todoList, setTodoList] = useState<TTodoList>(ToDoListData)
  const [currentFilter, setCurrentFilter] = useState<TToDoFilter>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentSort, setCurrentSort] = useState<TToDoSort>("Newest")

  const processedTodoList = todoList
    .filter((item) => {
      if (currentFilter === "Active") return !item.isDone
      if (currentFilter === "Completed") return item.isDone
      return true
    })
    .filter((item) => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime()
      const dateB = new Date(b.createdAt).getTime()
      return currentSort === "Newest" ? dateB - dateA : dateA - dateB
    })

  const incompleteTasksCount = todoList.filter((item) => !item.isDone).length

  const handleAddItem = (title: string, done: boolean) => {
    const lastItemIndex = todoList.length - 1
    const newItem: IToDoItem = {
      id: todoList.length > 0 ? todoList[lastItemIndex].id + 1 : 1,
      title,
      isDone: done,
      createdAt: new Date(),
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
    document.title = `T O D O L I S T | ${incompleteTasksCount} items left to be done.`
  }, [incompleteTasksCount])

  return (
    <main className="relative min-h-screen bg-background pb-10">
      <Header onCreate={handleAddItem} />
      
      <div className="mx-auto max-w-md px-6 -mt-4 relative z-50 md:max-w-xl">
        <Card className="flex flex-col gap-3 p-4 shadow-xl md:flex-row md:items-center bg-card">
          <Input 
            placeholder="Search tasks..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent"
          />
          
          <select 
            value={currentSort} 
            onChange={(e) => setCurrentSort(e.target.value as TToDoSort)}
            className="h-9 rounded-md border border-input bg-card px-3 py-1 text-sm shadow-xs outline-none focus:border-ring dark:bg-zinc-900 cursor-pointer text-foreground"
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </Card>
      </div>

      <HCenteredContainer className="mt-4">
        <ListCard
          data={processedTodoList}
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