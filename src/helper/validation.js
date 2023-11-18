function isValidEnvironmentId(req, res, next) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error("id is must be a number");
  if (id < 1) throw new Error("id can not be negative");
  next();
}

function isValidBody(req, res, next) {
  const { label, category, priority } = req.body;
  if (!label) throw new Error("empty");
  if (!priority) throw new Error("empty");
  if (!category) throw new Error("empty");
  next();
}

module.exports = { isValidBody, isValidEnvironmentId };
