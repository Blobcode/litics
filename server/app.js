// Koa
const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const routes = require("./routes");
const db = require("./db");

db.serialize(function () {
  db.run("CREATE TABLE sites (siteId TEXT, domain TEXT)");
});

const app = new Koa();
app.use(logger());
app.use(bodyParser());

// init routes, listen
app.use(routes.routes()).use(routes.allowedMethods());
app.listen(3000);
