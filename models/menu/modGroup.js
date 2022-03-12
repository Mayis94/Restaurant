import mongoose from 'mongoose';
  const { Schema } = mongoose;

   const ModGroupSchema = new Schema({
   
    name: {
        type: String,
        minlength:3,
        maxlength:20
    },
    modOption_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ModOption'
      }],
   
  });
  
  

  

  export const ModGroup = mongoose.model('ModGroup', ModGroupSchema);