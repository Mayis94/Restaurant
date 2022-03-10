import { Admin } from "../../../models/employee/admin";


export const addAdmin = (req, res) => {
  Admin.create(req.body)
    .then((data) => {
      res.send("ok");
    })
    .catch((eroe) => {
      res.status(500).send("error");
    });
};

export const getAdmin = (req, res) => {
  Admin.find()
  .then((data) => res.json(data));
};
export const updateAdmin = (req, res)=>{
  Admin.find(req.query.id).update(req.body).then(
    data=>res.send("ok")
  )
}