const express = require("express");
const categoryController = require("../controller/category");

categoryRouter = express.Router();

categoryRouter.route("/blog").get(categoryController.categoryGet);
categoryRouter.route("/blog/:category").get(categoryController.categoryGet);

module.exports = categoryRouter;
