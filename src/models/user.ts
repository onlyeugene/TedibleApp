import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  phone:{
    type:Number,
    required: true,
  },
  provider: {
    type: String,
  },
}, {
  timestamps: true,
});

const User = mongoose.models.UserMod || mongoose.model("UserMod", userSchema);
export default User;