const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const citySchema = new Schema(
  {
    review: {
      type: String,
      required: true,
      trim: true,
      minLength: 10 
    },
    numVisited: {
      type: Number,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
      minLength: 5
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const City = model("City", citySchema);

module.exports = City;
