const questionRouter = require("./questionRouter")
const categoryRouter = require("./categoryRouter")

function Router(app){
    app.use('/api/v1/questions', questionRouter)
    app.use('/api/v1/categories', categoryRouter)

}

module.exports = Router