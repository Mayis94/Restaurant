import { Order } from "../../models/order";

export class OrderService {
  static async find() {
    return Order.find();
  }
  static async update({ params }, { data }) {
    return Order.findByIdAndUpdate(params, data);
  }

  static async delete({ params }) {
    return Order.findByIdAndDelete({ _id: params });
  }

  static async create({ data }) {
    Order.create(data);
  }
}
