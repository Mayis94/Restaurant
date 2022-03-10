import mongoose from 'mongoose';
  const { Schema } = mongoose;

   const CategorySchema = new Schema({
   
    category_name: {
        type: String,
        minlength:1,
        maxlength:20
    },
    
  });
  CategorySchema.virtual("products", {
    ref: "Product",
    localField: "_id",
    foreignField: "category_id",
  });
  CategorySchema.set("toObject", { virtuals: true });
  CategorySchema.set("toJSON", { virtuals: true });

  export const Category = mongoose.model('Category', CategorySchema);