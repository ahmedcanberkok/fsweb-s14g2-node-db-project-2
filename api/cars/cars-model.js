const db = require("../../data/db-config")

const getAll = () => {
  // HOKUS POKUS
  return db("cars");
}

const getById = (carId) => {
  // HOKUS POKUS
  return db("cars").where("id",carId).first()
}

const create = async (carEntity) => {
  // HOKUS POKUS
  const [id] = db("cars").insert(carEntity);
  return getById(id);

}

module.exports = {
  getAll,
  getById,
  create
}