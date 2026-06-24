import express from "express";
import type { Application, Request, Response } from "express";
import todos from "./todolist.data.json";
import fs from "fs";

type TTodoItem = {
	id: number;
	title: string;
	isDone: boolean;
};

const todosFilePath = "./todolist.data.json";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const findTodoById = (id: number) => {
	return todos.find((todo: TTodoItem) => todo.id === id);
};

const handleIDGeneration = () : number => {
	const lastTodo: TTodoItem = todos[todos.length - 1];
	return lastTodo ? lastTodo.id + 1 : 1;
}

app.get("/", (req: Request, res: Response) => {
	res.send({ message: "Welcome to the To-Do List API!"});
});

app.get("/todos", (req: Request, res: Response) => {
	res.send({ 
		status: 200,
		message: "Successfully get all the to-do items",
		data: todos
	});
});

app.get("/todos/:todoId", (req: Request, res: Response) => {
	const {todoId} = req.params;
	const existingTodo = findTodoById(Number(todoId));
	if(existingTodo) {
	res.send({
		message: `This endpoint will return to-do item with id ${todoId}`,
		data: existingTodo
	});
	} else {
		res.status(404).send({
			message: `To-do item with id ${todoId} not found`
		});
	}
});

app.post("/todos", (req: Request, res: Response) => {
	const newTodo = {
		id: handleIDGeneration(),
		...req.body
	};

	fs.writeFile(todosFilePath, JSON.stringify([...todos, newTodo]), (err) => {
		if(err) {
			res.status(500).send({
				message: "Failed to add new to-do item",
				error: err.message
			});
		}
	});

	res.status(201).send({
		message: "Successfully add new to-do item",
		data: newTodo
	});
});

app.put("/todos/:todoId", (req: Request, res: Response) => {
	const { id } = req.params;
	const existingTodo = findTodoById(Number(id));

	if (!existingTodo) {
		res.status(404).send({
			message: `To-do item dengan id ${id} tidak ditemukan`,
		});
	} else {
		const updatedTodo = { ...existingTodo, ...req.body };

		fs.writeFile(
			todosFilePath,
			JSON.stringify(todos.map(
				(todo: TTodoItem) => todo.id === Number(id) ? updatedTodo : todo,),
			),
			(err) => {
				if (err) {
					res.status(500).send({
						message: "Gagal mengubah to-do item",
						error: err.message,
					});
				}
			},
		);

		res.send({
			message: `Berhasil mengubah to-do item dengan id ${id}`,
			data: updatedTodo,
		});
	}
});

app.delete("/todos/:todoId", (req: Request, res: Response) => {
	const { todoId } = req.params;
	const existingTodo = findTodoById(Number(todoId));

	if (existingTodo) {
		fs.writeFile(
			todosFilePath,
			JSON.stringify(
				todos.filter((todo: TTodoItem) => todo.id !== Number(todoId)),
			),
			(err) => {
				if (err) {
					res.status(500).send({
						message: "Gagal menghapus to-do item",
						error: err.message,
					});
				} else {
					res.send({
						message: `Berhasil menghapus to-do item dengan id ${todoId}`,
					});
				}
			},
		);
	} else {
		res.status(404).send({
			message: `To-do item dengan id ${todoId} tidak ditemukan`,
		});
	}
});

app.listen(PORT, () => {
	console.log(`Backend server is running on http://localhost:${PORT}`);
});