const noteRouter = require("./noteappRouter")

function Router(app){
app.use('/api/v1/notes',noteRouter)
}

module.exports = Router