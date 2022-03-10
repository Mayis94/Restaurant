import { Position } from "../../../models/employee/position";


export const addPosition = (req, res) => {
  Position.create(req.body)
    .then((data) => {
      res.send("ok");
    })
    .catch((eroe) => {
      res.status(500).send("error");
    });
};

export const getPosition = (req, res) => {
  Position.find()
  .then((data) => res.json(data));
};
export const updatePosition = (req, res)=>{
  ModGroup.find(req.query.id).update(req.body).then(
    data=>res.send("ok")
  )
}