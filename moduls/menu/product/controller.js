import { ProductService } from "./service";

export class ProductController {
  static async createProduct(req, res) {
    return ProductService.create({ data: req.body })
      .then((category) => res.json(category._id))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async findProduct(req, res) {
    ProductService.find()
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async updateProduct(req, res) {
    ProductService.update({ params: req.params.id }, { data: req.body })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async deleteProduct(req, res) {
    ProductService.delete({ params: req.params.id })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async manyProduct(req, res) {
    ProductService.createManyProduct({ data: req.body })
      .then((category) => res.json(category[0]._id))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}
