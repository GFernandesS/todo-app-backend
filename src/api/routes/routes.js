import express from 'express'
import todoRoutes from './todoRoutes.js'

export default (app) => {
  const router = express.Router()

  app.use('/api', router)

  todoRoutes(app)
}
