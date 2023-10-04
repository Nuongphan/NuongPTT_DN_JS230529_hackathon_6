const Note = require("../models/noteappModel")
class NoteController {
    async getAllNote(req, res) {
        try {
            const data = await Note.findAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json("error")
        }
    }
    async getNote(req, res) {
        const id = req.params.id
        try {
            const data = await Note.findOne({where: {id:id}})
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json("error")
        }
    }
    async creatNote(req, res) {
        const note= req.body.note
        try {
            await Note.create({
                note: note
            })
            res.status(200).json("created")
        } catch (error) {
            res.status(400).json("error")
        }
    }
    async deleteNote(req, res) {
        const id = req.params.id
        try {
            await Note.destroy({where: {id:id}})
            res.status(200).json("deleted")
        } catch (error) {
            res.status(400).json("error")
        }
    }
}

module.exports = new NoteController()