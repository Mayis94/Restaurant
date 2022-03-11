import { CategoryService } from "../category/service";
import { ModGroupService } from "../modGroup/service";
import { ModOptionService } from "../modOption/service";
import { ProductService } from "../product/service";
import { OrderService } from "../../order/service";
import { UserService } from "../../user/service";

export class ConnectController {
  // static async createMenu(req, res) {
  //   const optionName = req.body.option_name;
  //   const groupName = req.body.modGroup;
  //   let n = 0;
  //   ProductService.create({
  //     data: {
  //       product_name: req.body.product_name,
  //       price: req.body.price,
  //       description: req.body.description,
  //       comment: req.body.comment,
  //     },
  //   })
  //     .then((data3) => {
  //       for (let i = 0; i < groupName.length; i++) {
  //         ModGroupService.create({
  //           data: { modGroup: groupName[i] },
  //         })
  //           .then((data2) => {
  //             for (let i = 0; i < optionName[n].length; i++) {
  //               ModOptionService.create({
  //                 data: { option_name: optionName[n][i] },
  //               })
  //                 .then((data) => {
  //                   ModGroupService.update(
  //                     { params: data2._id },
  //                     { data: { $addToSet: { modOption_id: data._id } } }
  //                   );
  //                 })
  //                 .catch((err) => {
  //                   res.status(400).send(err);
  //                 });
  //             }
  //             n++;

  //             ProductService.update(
  //               { params: data3._id },
  //               { data: { $addToSet: { modGroup_id: data2._id } } }
  //             );
  //           })
  //           .catch((err) => {
  //             res.status(400).send(err);
  //           });
  //       }

  //       CategoryService.create({
  //         data: { category_name: req.body.category_name },
  //       })
  //         .then((data4) => {
  //           ProductService.update(
  //             { params: data3._id },
  //             { data: { category_id: data4._id } }
  //           );
  //         })
  //         .catch((err) => {
  //           res.status(400).send(err);
  //         });
  //       res.send("ok");
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err);
  //     });
  // }

  static async sortProduct(req, res) {
    let category = [];
    ProductService.sortProduct({ data: req.query.sort })
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].category_id.category_name === req.query.category_name) {
            category.push(data[i]);
          }
        }
        res.json(category);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
  static async createOrder(req, res) {
    OrderService.create({ data: { orders: req.body.orders } }).then((data) => {
      ProductService.create({
        data: {
          product_name: req.body.product_name,
          price: req.body.price,
          description: req.body.description,
          comment: req.body.comment,
        },
      }).then((data1) => {
        UserService.create({
          data: {
            first_name: req.body.first_name,
            family_name: req.body.family_name,
            phone_number: req.body.phone_number,
            address: req.body.address,
          },
        }).then((data2) => {
          OrderService.update(
            { params: { _id: data._id } },
            { data: { user_id: data2._id, product_id: data1._id } }
          ).catch((err) => res.send(err));
        });
      });
    }).then(res.send("ok"))
  }






























































  
  static async createMenu(req, res) {
    res.json(req.body)
  }
}
