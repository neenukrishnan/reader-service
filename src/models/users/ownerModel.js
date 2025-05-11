const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Owner name is required"],
      match: [
        /^[a-zA-Z\s]+$/,
        "Owner name should only contain alphabets and spaces, no special characters",
      ],
    },
    mobile: {
      type: String, // Keep as string to allow leading zeros
      required: [true, "Mobile number is required"],
      unique: true,
      match: [/^[0-9]{10}$/, "Mobile number must be a 10-digit number"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Email must be a valid email address"],
    },
    aadharNumber: {
      type: String, // Keep as string to preserve leading zeros
      required: [true, "Aadhar number is required"],
      unique: true,
      match: [/^\d{12}$/, "Aadhar number must be exactly 12 digits"],
    },
    aadharImage: {
      type: String,
      required: [true, "Aadhar image is required"],
    },
    status: {
      type: Number,
      enum: [0, 1, 2, 3],
      default: 1,
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const OwnerModel =
  mongoose.models.Owner || mongoose.model("Owner", ownerSchema);

module.exports = OwnerModel;
