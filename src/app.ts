import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { conectarServerDB } from "./config/db";
import { routerUser } from "./router/user";
import { routerLaunch } from "./router/launch";

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

conectarServerDB();

app.use("/user", routerUser);
app.use("/launch", routerLaunch);

app.use("/", (request, response) =>
  response.send("API do app by Marcelo Borges")
);
