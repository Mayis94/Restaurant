
import { User } from "../../models/user";

export class UserService {
  static async find() {
    return User.find();
  }
  static async update({ params }, { data }) {
    return User.findByIdAndUpdate(params, data);
  }

  static async delete({ params }) {
    return User.findByIdAndDelete({ _id: params });
  }

  static async create({ data }) {
    return User.create(data);
  }
}