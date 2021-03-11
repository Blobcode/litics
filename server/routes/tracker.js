const Router = require("@koa/router");
const router = new Router();

const nanoid = require("nanoid");

router.get("/", (ctx, next) => {
  ctx.body = "tracker";
});
router.get("/:key", async (ctx, next) => {
  ctx.body = "ok";
});

// export router
module.exports = router;
