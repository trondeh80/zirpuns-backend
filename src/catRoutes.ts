import Router from "koa-router";
import getTopKekCat from "./redditCats";

const catsRoutes = new Router();

// GETs a random pun from db
catsRoutes.get("/random", async (ctx, next) => {
  const quote = await getTopKekCat();
  ctx.body = quote;
  await next();
});

export default catsRoutes;