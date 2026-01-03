const validate = (schema, source) => {
  return (req, res, next) => {
    const {error, value} = schema.validate(req[source], {
        abortEarly: true, // return one error at a time or return all errors at onece
        allowUnknown: false, // allow or reject fields not included in schema.
        stripUnknown: true // remove unknown field or not
    });
    if (error) {
      return res.status(400).json({message : error.details[0].message});
    };
    next()
  };
};

export default validate;
