import express from "express";
import type { Application } from "express";
import type Response = require("express");
import type Request = require("express");
import todos from "./todolist.data.json";
import fs from 'node:fs';

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
    return todos.find((todo) => todo.id === id);
}

const handleIDGeneration = () : number => {
    const lastTodo = todos[todos.length - 1];
    return lastTodo ? lastTodo.id + 1 : 1;
}

app.get("/", (req: Request, res: Response) => {
    res.send({ message: "Welcome to the To-Do List API!" });
});

app.get("/todos", (req: Request, res: Response) => {
    res.send({ 
        message: "Successfully retrieve all to-do items.",
        data: todos,
    });
});

app.get("/todos/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const existingTodo = findTodoById(Number(id));
    if (existingTodo) {
        res.send({ 
            message: `This endpoint will return 1 to-do item with id ${id}`,
            data: existingTodo,
    });
    } else {
        res.status(404).send({
            message: `To-do item with id ${id} couldn't be found`
        });
    }
});

app.post("/todos", (req: Request, res: Response) => {
    const newTodo = {
        id: handleIDGeneration(),
        ...req.body,
    };

    fs.writeFile(todosFilePath, JSON.stringify([...todos, newTodo]), (err) => {
        if (err) {
            res.status(500).send({
                message: "Error add new to-do item",
                error: err.message
            });
        }

        res.status(201).send({
            message: "Successfully add new to-do item.",
            data: newTodo
        });
    });
});

app.put("/todos/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    const todoId = Number(id);

    const existingTodo = todos.find((todo) => todo.id === todoId);

    if(!existingTodo) {
        return res.status(404).send({
            message: `To-do item with id ${id} couldn't be found`
        });
    }

    const updatedTodo = {
        ...existingTodo,
        ...req.body,
        id: todoId
    };

    const updatedTodosArray = todos.map((todo) => {
        return todo.id === todoId ? updatedTodo : todo;
    });

    fs.writeFile(todosFilePath, JSON.stringify(updatedTodosArray), (err) => {
        if (err) {
            res.status(500).send({
                message: "Error update existing to-do item",
                error: err.message
            });
        }

        res.status(201).send({
            message: `Successfully update existing to-do item with id ${id}`,
            data: updatedTodo
        });
    });
});

app.delete("/todos/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    res.send({ message: `This endpoint will delete 1 to-do item with id ${id}`});
});

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});