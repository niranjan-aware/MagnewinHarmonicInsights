const calculationData = require("../../Models/calculationData");

const calculationDataController = async (req, res) => {
  try {
    const {
      user_id,
      project_title,
      description,
      problem_statement,
      proposed_solution,
      expected_outcome,
      frequency,
      voltage,
      cbRating,
      scRating,
      nlLoad,
      qf,
      pf,
      inputList,
    } = req.body;
    // console.log(req.body.c);

    if (
      user_id !== null &&
      project_title !== null &&
      description !== null &&
      problem_statement !== null &&
      proposed_solution !== null &&
      expected_outcome !== null &&
      frequency !== null &&
      frequency !== null &&
      voltage !== null &&
      cbRating !== null &&
      scRating !== null &&
      nlLoad !== null &&
      qf !== null &&
      pf !== null &&
      Array.isArray(inputList) && // Check if inputList is an array
      inputList.length > 0
    ) {
      // console.log(project_title);
      const Data = await calculationData.create({
        user_id,
        project_title,
        description,
        problem_statement,
        proposed_solution,
        expected_outcome,
        frequency,
        voltage,
        cbRating,
        scRating,
        nlLoad,
        qf,
        pf,
        inputList: inputList.map((item) => ({
          harmonicorder: item.harmonicorder,
          harmonicpercentage: item.harmonicpercentage,
        })),
      });
      // console.log(cbRating);
      res.status(200).json("perfect");
    } else {
      res.status(400).json("not perfect");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json("server error");
  }
};

module.exports = calculationDataController;
