const { movies } = require("../models");

module.exports = {
    list: (query) => movies.findAndCountAll(query),
    getById: (id) => movies.findByPk(id),
    get: (params) => movies.findOne({ where: params }),
    create: (params) => movies.create(params),
    update: (movie) => movie.save(),
    destroy: (id) => movies.destroy({ where: { id } }), 
};