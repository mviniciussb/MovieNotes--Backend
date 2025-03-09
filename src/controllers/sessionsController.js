const knex = require("../database/knex/index");
const { compare } = require("bcryptjs");
const jwt  = require ("../config/auth.js")
const pkg = require ("jsonwebtoken"); 
const { sign } = pkg;

class SessionsController {
    async create(request, response) {

        const { email, password } = request.body
        const user = await knex("users").where({ email }).first()

        if (!user) {
            return response.status(401).json({ Error: "E-mail ou senha incorreta." });
        }

        const passwordMatched = await compare(password, user.password)

        if (!passwordMatched) {
            return response.status(401).json({ Error: "E-mail ou senha incorreta." });
        }

        const { secret, expiresIn } = jwt
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return response.json({ user, token })
    }
}

module.exports = SessionsController 