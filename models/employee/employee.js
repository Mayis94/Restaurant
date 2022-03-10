import mongoose from 'mongoose';
  const { Schema } = mongoose;

   const EmployeeSchema = new Schema({
   
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
credit_catd:{
  type: Number,
  minlength:1,
  maxlength:20
},
address: {
  type: String,
  
},
position_id: {
  
    type: mongoose.Schema.Types.ObjectId,
    ref: "Position",
  },
  });
 
  
 
  

  export const Employee = mongoose.model('Employee', EmployeeSchema);