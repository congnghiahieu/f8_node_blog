const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  // Summary all routes
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
