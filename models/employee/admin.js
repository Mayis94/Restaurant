import mongoose from 'mongoose';
  const { Schema } = mongoose;

   const AdminSchema = new Schema({
   
    first_name: {
      type: String,
      minlength:1,
      maxlength:20
  },
  family_name: {
      type: String,
      minlength:1,
      maxlength:20
  },
  identify_id: {
    type: Number,
    minlength:1,
    maxlength:20
},
    phone_number: {
    type: Number,
    minlength:6,
    maxlength:15
},
access: {
  type: String,
  enum: ["menu", "order"],
  default: "menu",
},

  });
 
  
 
  

  export const Admin = mongoose.model('Admin', AdminSchema);