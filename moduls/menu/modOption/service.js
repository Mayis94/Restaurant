import { ModOption } from "../../../models/menu/modOption";

export class ModOptionService {
  static async find() {
    return ModOption.find();
  }
  static async update({ params }, { data }) {
    return ModOption.findByIdAndUpdate(params, data);
  }

  static async delete({ params }) {
    return ModOption.findByIdAndDelete({ _id: params });
  }

  static async create({ data }) {
    return ModOption.create(data);
  }
  static async createManyModOption({ data }) {
    return ModOption.insertMany(data);
  }
}
