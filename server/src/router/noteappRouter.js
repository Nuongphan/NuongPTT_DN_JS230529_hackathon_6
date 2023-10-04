const express = require('express')
const noteController = require("../controllers/noteappController")
const noteRouter = express.Router()
noteRouter.get('/', noteController.getAllNote)
noteRouter.get('/:id', noteController.getNote)
noteRouter.post('/', noteController.creatNote)
noteRouter.delete('/:id', noteController.deleteNote)


module.exports = noteRouter