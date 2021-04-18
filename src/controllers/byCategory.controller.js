const { StatusCodes } = require("http-status-codes");
const { byCategoryService } = require("../services")

module.exports = {
    byCategory: async (req, res) => {
        try {
            const { category } = req.query;
            const response = await byCategoryService.byCategory({ category });
      
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