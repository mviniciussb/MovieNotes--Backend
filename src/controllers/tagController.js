const knex = require("../database/knex/index");

class TagController {
    async index(request, response) {
        const { user_id } = request.params

        const tags = await knex("tags").where({ user_id })

        return response.json(tags)
    }
}

module.exports = TagController