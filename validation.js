const Joi = require("@hapi/joi");

// Register Validation 
const registerValitation = (reqBody) => {

    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(reqBody)


}
const loginValidation = (reqBody) => {

    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });

    return schema.validate(reqBody)


}

module.exports.registerValitation = registerValitation;
module.exports.loginValidation = loginValidation;