import mongoose from 'mongoose';
  const { Schema } = mongoose;

   const ModOptionSchema = new Schema({
   
    option_name: {
      type: String
    
  },
    
  });
  
  

  

  export const ModOption = mongoose.model('ModOption', ModOptionSchema);