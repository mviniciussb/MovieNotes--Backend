const knex = require("../database/knex/index");
const { compare } = require("bcryptjs");
const jwt = require("../config/auth.js"); // Configuração do JWT
const pkg = require("jsonwebtoken");
const { sign } = pkg;

class SessionsController {
    async create(request, response) {
        const { email, password } = request.body;

        // Verifica se o usuário existe
        const user = await knex("users").where({ email }).first();

        if (!user) {
            return response.status(401).json({ error: "E-mail ou senha incorreta." });
        }

        // Compara a senha fornecida com a senha armazenada no banco
        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            return response.status(401).json({ error: "E-mail ou senha incorreta." });
        }

        // Configuração do JWT
        const { secret, expiresIn } = jwt;

        // Cria o token
        const token = sign({}, secret, {
            subject: String(user.id),  // A chave 'subject' é o ID do usuário
            expiresIn,  // Define o tempo de expiração do token
        });

        return response.json({ user, token }); // Retorna o usuário e o token
    }
}

module.exports = SessionsController;
