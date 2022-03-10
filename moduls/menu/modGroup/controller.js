import { ModGroupService } from "./service";

export class ModGroupController {
  static async createModGroup(req, res) {
    return ModGroupService.create({ data: req.body })
      .then((category) => res.json(category._id))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async findModGroup(req, res) {
    ModGroupService.find().then((data) => res.json(data));
  }
  static async updateModGroup(req, res) {
    ModOptionService.update({ params: req.params.id }, { data: req.body })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async deleteModGroup(req, res) {
    ModGroupService.delete({ params: req.params.id })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}
