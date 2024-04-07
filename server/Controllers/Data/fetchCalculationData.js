const calculationData = require("../../Models/calculationData");

const fetchCalculationData = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const user_id = req.query.user_id || "";
    const search = req.query.search || null;

    if (search) {
      let projects = await calculationData
        .find({
          $or: [
            { project_title: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
          ],
        })
        .skip(page * limit)
        .limit(limit);

      const response = {
        error: false,
        page: page + 1,
        limit,
        projects,
      };

      res.status(200).json(response);
    } else {
      let projects = await calculationData
        .find({ user_id: user_id })
        .skip(page * limit)
        .limit(limit);

      const response = {
        error: false,
        page: page + 1,
        limit,
        projects,
      };

      res.status(200).json(response);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = fetchCalculationData;
