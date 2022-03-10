import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  product_name: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },
  price: { type: Number, minlength: 3, maxlength: 20 },

  description: { type: String, minlength: 3, maxlength: 200 },

  modGroup_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ModGroup",
    },
  ],
  category_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  comment: {
    type: String,
    minlength: 3,
    maxlength: 20,
  },
});
ProductSchema.virtual("categorys", {
  ref: "Category",
  localField: "_id",
  foreignField: "product_id",
});
ProductSchema.set("toObject", { virtuals: true });
ProductSchema.set("toJSON", { virtuals: true });

export const Product = mongoose.model("Product", ProductSchema);
