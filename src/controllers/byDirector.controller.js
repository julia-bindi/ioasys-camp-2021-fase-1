const { StatusCodes } = require("http-status-codes");
const { byDirectorService } = require("../services")

module.exports = {
    byDirector: async (req, res) => {
        try {
            const { director } = req.query;
            const response = await byDirectorService.byDirector({ director });
      
            if (!response) {
              return res.status(StatusCodes.NO_CONTENT).end();
            }
      
            return res.status(StatusCodes.OK).json(response);
          } catch (error) {
            console.log(error);
            return res
              .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
              .json(error.messages);
          }
    }
}