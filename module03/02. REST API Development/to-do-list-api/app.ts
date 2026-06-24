import express from "express";
import type { Application, NextFunction, Request, Response } from "express";
import { APP_PORT } from "./src/configs/env.config.js";
import apiRouter from "./src/routes/api.route.js";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", apiRouter);

app.use((error: Error | unknown, req: Request, res: Response, next: NextFunction) => {
	res.status(500).send({
		message: "Error happened on server",
		error: error instanceof Error ? error.message  
	})
})

app.listen(APP_PORT, () => {
	console.log(`Server is running on port ${APP_PORT}`);
});