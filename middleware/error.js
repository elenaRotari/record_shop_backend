export default error = (error, req, res, next) => {
  try {
    res.status(error.status || 500).send({ message: error.message });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
