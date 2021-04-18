const { StatusCodes } = require("http-status-codes");
const { byTitleService } = require("../services")

module.exports = {
    byTitle: async (req, res) => {
        try {
            const { title } = req.query;
            const response = await byTitleService.byTitle({ title });
      
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