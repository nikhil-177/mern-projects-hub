import { validationResult } from "express-validator"


export const ValidationResult = (req,res,next) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()) {
    res.status(400).json({errors: errors.array()})
  }
  next()
}