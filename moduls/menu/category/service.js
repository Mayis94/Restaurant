import { Category } from "../../../models/menu/category";

export class CategoryService {
  static async find() {
    return Category.find();
  }
  static async update({ params }, { data }) {
    return Category.findByIdAndUpdate(params, data);
  }

  static async delete({ params }) {
    return Category.findByIdAndDelete({ _id: params });
  }

  static async create({ data }) {
    return Category.create(data);
  }
  static async AllMenu() {
    return Category.find().populate({
      path: "products",
      populate: { path: "modGroup_id", populate: { path: "modOption_id" } },
    });
  }
}
