export default interface IToDoItem {
  id: number
  title: string
  isDone: boolean
  createdAt: Date
}

export type TTodoList = IToDoItem[]

export type TToDoFilter = "All" | "Active" | "Completed"
export type TToDoSort = "Newest" | "Oldest"