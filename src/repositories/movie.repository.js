const { movies } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    list: (query) => movies.findAndCountAll(query),
    getById: (id) => movies.findByPk(id),
    get: (params) => movies.findOne({ where: params }),
    getLike: (query) => movies.findAndCountAll({wherw: { [Op.like]: query }}),
    create: (params) => movies.create(params),
    update: (movie) => movie.save(),
    destroy: (id) => movies.destroy({ where: { id } }), 
};