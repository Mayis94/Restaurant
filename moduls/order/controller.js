import { OrderService } from "./service";

export class OrderController {
  static async createOrder(req, res) {
    return OrderService.create({ data: req.body })
      .then(res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async findOrders(req, res) {
    OrderService.find()
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async updateOrder(req, res) {
    OrderService.update({ params: req.params.id }, { data: req.body })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async deleteOrder(req, res) {
    OrderService.delete({ params: req.params.id })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}
