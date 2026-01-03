const authSuccess = (res, token) => {
  return res.status(200).send({
    status: 200,
    message: "Authentication successful",
    data: { token }
  })
};

const authError = (res) => {
  return res.status(401).send({
    status: 401,
    message: "Authentication error",
    data: null
  })
};

const notAuthorized = (res) => {
  return res.status(403).send({
    status: 403,
    message: "Access denied",
    data: null
  })
};

const duplication = (res, msg) => {
  return res.status(409).send({
    status: 409,
    message: msg,
    data: null
  })
};

const successGet = (res, result) => {
  return res.status(200).send({
    status: 200,
    message: "Success",
    data: result
  })
};

const successCreate = (res, result) => {
  return res.status(201).send({
    status: 201,
    message: "Created successfully",
    data: result,
  })
};

const successUpdate = (res, result) => {
  return res.status(200).send({
    status: 200,
    message: "Updated successfully",
    data: result
  })
};

const serverError = (res) => {
  return res.status(500).send({
    status: 500,
    message: "Something went wrong",
    data: null
  })
};

const badReq = (res, msg) => {
  return res.status(400).send({
    status: 400,
    message: msg,
    data: null
  })
};

const noData = (res, msg) => {
  return res.status(404).send({
    status: 404,
    message: msg,
    data: null
  })
};


