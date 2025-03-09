const userRoutes = require("./usersRoutes");
const notesRoutes = require("./notesRoutes");
const tagsRoutes = require("./tagsRoutes");
const sessionsRoutes = require("./sessionsRoutes");


const { Router } = require("express");
const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", notesRoutes);
routes.use("/tags", tagsRoutes);
routes.use("/sessions", sessionsRoutes);


module.exports = routes;
