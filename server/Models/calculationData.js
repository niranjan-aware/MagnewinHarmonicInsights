const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CalculationDataSchema = new Schema({
  user_id: { type: String },
  project_title: { type: String },
  description: { type: String },
  problem_statement: { type: String },
  proposed_solution: { type: String },
  expected_outcome: { type: String },
  frequency: { type: Number },
  voltage: { type: Number },
  cbRating: { type: Number },
  scRating: { type: Number },
  nlLoad: { type: Number },
  qf: { type: Number },
  pf: { type: Number },
  inputList: [
    {
      harmonicorder: { type: Number },
      harmonicpercentage: { type: Number },
    },
  ],
});

const calculationData = mongoose.model(
  "CalculationData",
  CalculationDataSchema
);

module.exports = calculationData;
