const { votes } = require("../models");

module.exports = {
    list: (query) => votes.findAndCountAll(query),
    getById: (id) => votes.findByPk(id),
    get: (params) => votes.findOne({ where: params }),
    create: (params) => votes.create(params),
    update: (vote) => vote.save(),
    destroy: (id) => votes.destroy({ where: { id } }), 
};