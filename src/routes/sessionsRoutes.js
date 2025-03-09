const { Router } = require("express")
const SessionsController = require ("../controllers/sessionsController")
const appSessionsRouters = Router()

const sessionsController = new SessionsController()

appSessionsRouters.post("/", sessionsController.create)

module.exports = appSessionsRouters