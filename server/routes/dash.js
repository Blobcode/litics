const Router = require("@koa/router");
const router = new Router();

const { nanoid } = require("nanoid");
const db = require("../db");

router.get("/", async (ctx, next) => {
  ctx.body = "dash";
});

router.post("/new", (ctx, next) => {
  body = ctx.request.body;
  db.run(
    `INSERT INTO sites(siteId,domain)
              VALUES('${nanoid()}','${body.domain}')`,
    (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
    }
  );
  ctx.body = "dash";
});

// export router
module.exports = router;
