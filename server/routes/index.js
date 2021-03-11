const Router = require("@koa/router");
const router = new Router();

const trackerRoute = require("./tracker");
const dashRoute = require("./dash");

//? ping-pong route
router.get("/ping", async (ctx, next) => {
  ctx.body = "hello there";
});

router.use("/d", dashRoute.routes());
router.use("/t", trackerRoute.routes());

module.exports = router;
