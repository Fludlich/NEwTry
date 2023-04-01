const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const resendVerificationEmail = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const changeSubsription = Joi.object({
  subscription: Joi.string().required().valid("starter", "pro", "busines"),
});

module.exports = {
  addSchema,
  updateFavoriteSchema,
  resendVerificationEmail,
  changeSubsription,
};
