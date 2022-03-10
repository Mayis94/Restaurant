import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema({
  
 
  orders: {
    type: String,
    
  },
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
    
  product_id:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }]
});


export const Order = mongoose.model("Order", OrderSchema);
