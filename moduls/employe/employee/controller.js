import { Employee } from "../../../models/employee/employee";

export const addEmployee = (req, res) => {
  Employee.create(req.body)
    .then((data) => {
      res.send("ok");
    })
    .catch((eroe) => {
      res.status(500).send("error");
    });
};

export const getEmployee = (req, res) => {
  Employee.find()
  .then((data) => res.json(data));
};
export const updateEmployee = (req, res)=>{
  Employee.find(req.query.id).update(req.body).then(
    data=>res.send("ok")
  )
}