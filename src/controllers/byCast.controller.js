const { StatusCodes } = require("http-status-codes");
const { byCastService } = require("../services")

module.exports = {
    byCast: async (req, res) => {
        try {
            const { cast } = req.query;
            const response = await byCastService.byCast({ cast });
      
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