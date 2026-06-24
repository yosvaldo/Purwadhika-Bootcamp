import { Router, type Request, type Response } from "express";
import { APP_NAME } from "../configs/env.config.js";
import todoRouter from "../resources/todo.resource.js";

const apiRouter: Router = Router();

apiRouter.get("/", (_req: Request, res: Response) => {
	res.send({ message: `Welcome to the ${APP_NAME}!` });
});

apiRouter.use("/todos", todoRouter);

export default apiRouter;