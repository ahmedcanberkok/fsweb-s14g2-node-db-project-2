const CarModel = require("./cars-model");
const vinValidator = require('vin-validator');


const checkCarId = async (req, res, next) => {
  // HOKUS POKUS
  try {
    const isExistCar = await CarModel.getById(req.param.id);
    if (!isExistCar) {
    res.status(404).json({message:`${req.param.id} kimliğine sahip araba bulunamadi` });      
    } else {
      req.existCar = isExistCar ;
      next();
    }
  } catch (error) {
    next(error);
  }

}

const checkCarPayload = (req, res, next) => {
  // HOKUS POKUS
  try {
    const allFields = ["vin","make","model","mileage"];
    const missingFields = [];
    for(let i in  req.body ) {
      let isContain = allFields.includes(i) ;
      if (isContain && !req.body[i]) {
      missingFields.push(i);
      }
    }
    if (missingFields.length>0) {
      res.status(400).json({message: `${missingFields.toString()} ${missingFields.length == 1 ? "is " : "are "} missing`});
      
    } else{
      next();
    }
  } catch (error) {
    next(error);
  }
}

const checkVinNumberValid = (req, res, next) => {
  try {
    let isValidVin = vinValidator.validate(req.body.vin);
    if (!isValidVin) {
      res.status(400).json({message: `vin ${req.body.vin} is invalid `});  
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
  // HOKUS POKUS
}

const checkVinNumberUnique = async (req, res, next) => {
  // HOKUS POKUS
  try {
    let isExistVin = await CarModel.getById(req.params.vin);
    if (isExistVin) {
      res.status(400).json({message: `vin ${req.params.vin} already exists`})
      
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
  
}