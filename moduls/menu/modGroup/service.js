import { ModGroup } from "../../../models/menu/modGroup";

export class ModGroupService {
  static async find() {
    return ModGroup.find();
  }
  static async update({ params }, { data }) {
    return ModGroup.findByIdAndUpdate(params, data);
  }

  static async delete({ params }) {
    return ModGroup.findByIdAndDelete({ _id: params });
  }

  static async create({ data }) {
    return ModGroup.create(data);
  }
  static async createManyModGroup({ data }) {
    return ModGroup.insertMany(data);
  }
}
