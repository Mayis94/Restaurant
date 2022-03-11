import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: {
    type: String,
    minlength: 1,
    maxlength: 20,
  },
  family_name: {
    type: String,
    minlength: 1,
    maxlength: 20,
  },
  phone_number: {
    type: Number,
    minlength: 1,
    maxlength: 15,
  },
  address: {
    type: String,
   
  },
});

export const User = mongoose.model("User", UserSchema);
