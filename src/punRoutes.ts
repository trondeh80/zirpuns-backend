import Router from "koa-router";
import { getQuoteById, getRandomQuote } from "./punData";

const punsRoutes = new Router();

// GETs a random pun from db
punsRoutes.get("/random", async (ctx, next) => {
  const quote = await getRandomQuote();
  ctx.body = quote;
  await next();
});

// Get a pun by id
punsRoutes.get("/pun/:id", async (ctx, next) => {
  const quote = await getQuoteById(ctx.params.id);
  ctx.body = quote;
  await next();
});

// POSTs a new pun into the db
punsRoutes.post("/pun", async (ctx, next) => {
  // Todo: integrate with db here and return status code
  ctx.body = { msg: "ok" };
  await next();
});

// Updates a pun by id
punsRoutes.put("/pun/:id", async (ctx, next) => {
  // Todo implement db action to update pun by id
  const { request } = ctx;
  await next();
});

export default punsRoutes;
