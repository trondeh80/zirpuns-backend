import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import json from "koa-json";

// The port this app will be exposing
const PORT = 1337;

// setup koa and router
const app = new Koa();
const router = new Router();

// GETs a random pun from db
router.get("/", async (ctx, next) => {
  // Todo: Replace this with code that fetches a random pun
  ctx.body = { zirpun: "Det er ikke sol om noe annet skygger" };
  await next();
});

// POSTs a new pun into the db
router.post("/", async (ctx, next) => {
  // Todo: integrate with db here and return status code
  ctx.body = { msg: "ok" };
  await next();
});

// Deletes a pun by id
router.delete("/:id", async (ctx, next) => {
  // Todo implement db action to delete pun by id
});

// Updates a pun by id
router.put("/:id", async (ctx, next) => {
  // Todo implement db action to update pun by id
  const { request } = ctx;
});

// middlewares:
app.use(json());
app.use(logger());

// routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => console.log(`Zirpuns API listening on port ${PORT}`));
