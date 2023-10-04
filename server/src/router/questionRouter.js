const express = require("express");
const controllers = require("../controllers/questionController")
const questionRouter= express.Router();
questionRouter.get('/', controllers.getAllQuestion)
questionRouter.get('/test', controllers.getQuestionWithParams)
questionRouter.get('/:id', controllers.getQuestion)
questionRouter.get('/:id/answers', controllers.getQuestionWithAnswers)
questionRouter.post('/', controllers.addQuestion)
module.exports = questionRouter;
