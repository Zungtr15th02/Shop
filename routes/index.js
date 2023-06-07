const userRouter = require('./user')
const { notFound, errHandler } = require('../middlewares/errHandler')

const initRoutes = (app) => {
    app.use('/api/user', userRouter)


}

module.exports = initRoutes