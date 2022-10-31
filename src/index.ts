import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import cors from "koa-cors";
import * as dotenv from "dotenv";
import punRoutes from "./punRoutes";

// Enable .env variables
dotenv.config();

// The port this app will be exposing
const PORT = 1337;

// setup koa and router
const app = new Koa();
const router = new Router();

router.use("/puns", punRoutes.routes(), punRoutes.allowedMethods());

// middlewares:
app.use(json());
app.use(logger());
app.use(cors());

// routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log(`Zirpuns API listening on port ${PORT}`));
