import type { TTodoList } from "@/models/to-do-item.model"

const ToDoListData: TTodoList = [
  {
    id: 1,
    title: "Complete online JavaScript course",
    isDone: true,
    createdAt: new Date("2026-06-01T08:00:00"),
  },
  {
    id: 2,
    title: "Jog around the park 3x",
    isDone: false,
    createdAt: new Date("2026-06-01T08:00:00"),
  },
  {
    id: 3,
    title: "10 minutes meditation",
    isDone: false,
    createdAt: new Date("2026-06-01T08:00:00"),
  },
  {
    id: 4,
    title: "Read for 1 hour",
    isDone: false,
    createdAt: new Date("2026-06-01T08:00:00"),
  },
  {
    id: 5,
    title: "Pick up groceries",
    isDone: false,
    createdAt: new Date("2026-06-01T08:00:00"),
  },
  {
    id: 6,
    title: "Complete Todo App on Frontend Mentor",
    isDone: false,
    createdAt: new Date("2026-06-01T08:00:00"),
  },
]

export default ToDoListData
