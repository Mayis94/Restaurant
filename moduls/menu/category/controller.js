import { CategoryService } from "./service";

export class CategoryController {
  static async create(req, res) {
    return CategoryService.create({ data: req.body }).then(res.send("ok"));
  }
  static async find(req, res) {
    CategoryService.find().then((data) => res.json(data));
  }
  static async updateCategory(req, res) {
    CategoryService.update({ params: req.params.id }, { data: req.body }).then(
      (category) => res.send("ok")
    );
  }
  static async deleteCategory(req, res) {
    CategoryService.delete({ params: req.params.id }).then((category) =>
      res.send("ok")
    );
  }
  static async getAllMenu(req, res) {
    CategoryService.AllMenu().then((category) => res.json(category));
  }
}
