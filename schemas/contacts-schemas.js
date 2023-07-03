const Joi = require("joi");

const contactAddSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required()
    .messages({
      "any.required": "field 'name' is missing",
    }),
  email: Joi.string().email().required().messages({
    "any.required": "field 'email' is missing",
  }),
  phone: Joi.string()
    .pattern(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/)
    .required()
    .messages({
      "any.required": "field 'phone' is missing",
    }),
});

module.exports = { contactAddSchema };
