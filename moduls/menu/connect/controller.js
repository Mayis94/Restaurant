import { CategoryService } from "../category/service";
import { ModGroupService } from "../modGroup/service";
import { ModOptionService } from "../modOption/service";
import { ProductService } from "../product/service";
import { OrderService } from "../../order/service";
import { UserService } from "../../user/service";
import { ModGroupController } from "../modGroup/controller";

export class ConnectController {


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
    OrderService.create({ data: { orders: req.body.orders } })
      .then((data) => {
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
      })
      .then(res.send("ok"));
  }

  static async createMenu(req, res) {
    let Menu = req.body;

    for (let i = 0; i < Menu.length; i++) {
      ProductService.create({ data: Menu[i] }).then((product) => {
        let group = Menu[i].modGroup;
        CategoryService.create({data:Menu[i]})
        .then(category=>{ProductService.update(
          { params: product._id },
          { data:  {category_id:category._id }  }
        );})

        ModGroupService.createManyModGroup({ data: group }).then((modGroup) => {
          for (let i = 0; i < modGroup.length; i++) {
            let id = modGroup[i]._id;

            ProductService.update(
              { params: product._id },
              { data: { $addToSet: { modGroup_id: id } } }
            );

            let option = group[i].options;

            ModOptionService.createManyModOption({ data: option }).then(
              (modOption) => {
                for (let i = 0; i < modOption.length; i++) {
                  ModGroupService.update(
                    { params: id },
                    { data: { $addToSet: { modOption_id: modOption[i]._id } } }
                  );
                }
              }
            );
          }
        });
      });
    }
  }
}

