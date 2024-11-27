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
  },
  provider: {
    type: String,
  },
}, {
  timestamps: true,
});


const User = mongoose.models.Users || mongoose.model("Users", userSchema);
export default User;