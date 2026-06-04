import { TTodoList } from "../../models/to-do-item.model"

type Props = {
  data: TTodoList;
}

const ToDoListCard = ({ data }: Props) => {
  return (
    <div className="rounded-lg bg-white shadow-xl overflow-hidden">
      <div className="flex flex-col divide-y divide-gray-200">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-5 text-gray-700">
            <input 
              type="checkbox" 
              checked={item.isDone} 
              readOnly 
              className="rounded-full border-gray-300"
            />
            <span className={item.isDone ? "line-through text-gray-400" : ""}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDoListCard