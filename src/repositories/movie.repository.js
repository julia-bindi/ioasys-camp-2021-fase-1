const { movies } = require("../models");
const  {Op } = require('sequelize');

module.exports = {
    list: (query) => movies.findAndCountAll(query),
    getById: (id) => movies.findByPk(id),
    get: (params) => movies.findOne({ where: params }),
    getILikeTitle: (param) => movies.findAndCountAll({where: {title: { [Op.iLike]: param }}}),
    getILikeCategory: (param) => movies.findAndCountAll({where: {category: { [Op.iLike]: param }}}),
    getILikeDirector: (param) => movies.findAndCountAll({where: {director: { [Op.iLike]: param }}}),
    getILikeCast: (param) => movies.findAndCountAll({where: {cast: { [Op.iLike]: param }}}),
    create: (params) => movies.create(params),
    update: (movie) => movie.save(),
    destroy: (id) => movies.destroy({ where: { id } }), 
    find: () => movies.findAndCountAll({where: {director: { [Op.iLike]: '%Chu%'}}})
};