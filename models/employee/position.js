import mongoose from 'mongoose';
const { Schema } = mongoose;
const PositionSchema = new Schema({
    position: {
        type: String,
        minlength:1,
        maxlength:20
    },
    access: {
      type: String,
      enum: ["Tnoren", "Menejer"],
      default: "Menejer",
    },
  });

  
  export const Position = mongoose.model("Position", PositionSchema);