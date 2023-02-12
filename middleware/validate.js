import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);

const validate = (schema) => {
  const data = ajv.compile(schema);
  return (req, res, next) => {
    const valid = data(req.body);
    if (!valid) return res.status(400).json(data.errors);
    next();
  };
};
export default validate;
