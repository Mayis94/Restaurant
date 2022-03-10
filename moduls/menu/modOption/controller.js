import { ModOptionService } from "./service";

export class ModOptionController {
  static async createModOption(req, res) {
    return ModOptionService.create({ data: req.body }).then((category) =>
      res.json(category._id)
    );
  }
  static async findModOption(req, res) {
    ModOptionService.find()
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async updateModOption(req, res) {
    ModOptionService.update({ params: req.params.id }, { data: req.body })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async deleteModOption(req, res) {
    ModOptionService.delete({ params: req.params.id })
      .then((category) => res.json(category))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}
