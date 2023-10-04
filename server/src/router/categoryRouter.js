const express = require("express");
const controllers = require("../controllers/categoriesController")
const categoryRouter= express.Router();
categoryRouter.get('/:id', controllers.getCategory)
categoryRouter.get('/', controllers.getAllCategories)
categoryRouter.post('/', controllers.addCategory)




module.exports = categoryRouter;
