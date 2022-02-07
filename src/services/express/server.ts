import Express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";
import * as defaultEnv from "../../config/env";
import { createInvoice, fetchTest, getUsers, healthCheck } from "./routes";
import { bodyRequired } from "./middlewares";

const app = Express();

app.disable("x-powered-by");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (defaultEnv.NODE_ENV === "production") {
  app.use(helmet());
}

app.get(`/.health-check`, healthCheck);

app.get(`/users/`, getUsers);

app.get("/test/", fetchTest);

app.post("/createInvoice", bodyRequired, createInvoice);

export default app;
