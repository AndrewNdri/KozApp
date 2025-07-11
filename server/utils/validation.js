const Joi = require('@hapi/joi');

const registerValidation = data =>{
    const schema = Joi.object({
        username: Joi.string().min(3).max(20).required(),
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

const loginValidation = data =>{
    const schema = Joi.object({
        email: Joi.string().max(50).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports = {registerValidation, loginValidation};