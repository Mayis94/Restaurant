import { Product } from "../../../models/menu/product";

export class ProductService {
  static async find() {
    return Product.find();
  }
  static async update({ params }, { data }) {
    return Product.findByIdAndUpdate(params, data);
  }

  static async delete({ params }) {
    return Product.findByIdAndDelete({ _id: params });
  }

  static async create({ data }) {
    return Product.create(data);
  }
  static async sortProduct({ data }) {
    return Product.find().sort({ product_name: data }).populate("category_id");
  }
  static async createManyProduct({ data }) {
    return Product.insertMany(data);
  }
}
