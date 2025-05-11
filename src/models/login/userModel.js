const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  mobile: { type: String },
  role: { type: Number, enum: [100, 101, 102, 103], default: 103 },
  lastActivity: { type: Date, default: Date.now },
  loginTimestamp: { type: Date, default: Date.now },
  status: { type: Number, enum: [0, 1, 2, 3], default: 1 },
  otp: { type: String },
  otpCreatedTime: { type: Date },
  otpExpireTime: { type: Date },
  otpStatus: { type: Number, enum: [0, 1], default: 1 },
  activeStatus: { type: Number, enum: [0, 1], default: 1 },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: "roleReference",
  },
  userName : {
    type: String,
  },
  password: {
    type: String,
  },
});

userSchema.virtual("roleReference").get(function () {
  switch (this.role) {
    case 101:
      return "Owner";
    case 102:
      return "Driver";
    case 103:
      return "EndUser";
    default:
      throw new Error("Invalid role");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
