import {  UserService } from "./service";

export class UserController {
  static async createUser(req, res) {
    return UserService.create({ data: req.body })
      .then(res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async findUser(req, res) {
    UserService.find()
      .then((data) => res.json(data))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async updateUser(req, res) {
    UserService.update({ params: req.params.id }, { data: req.body })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async deleteUser(req, res) {
    UserService.delete({ params: req.params.id })
      .then((category) => res.send("ok"))
      .catch((err) => {
        res.status(400).send(err);
      });
  }
}