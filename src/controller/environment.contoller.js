const express = require("express");
const {
  getAllEnvironment,
  getAllEnvironmentById,
  createEnvironment,
  updateEnvironmentById,
  deleteEnvironment,
  patchEnvironment,
} = require("../service/environment.service");
const { isValidBody, isValidEnvironmentId } = require("../helper/validation");
const route = express.Router();

route.get("/", isValidBody, async (req, res) => {
  const data = await getAllEnvironment();
  buildResponse(res, 200, data);
});

route.get("/:id", isValidEnvironmentId, async (req, res) => {
  const { id } = req.params;
  const data = await getAllEnvironmentById(id);
  buildResponse(res, 200, data);
});

route.post("/", isValidBody, async (req, res) => {
  try {
    const { label, category, priority } = req.body;
    const data = await createEnvironment(label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.put("/:id", isValidBody, isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = await updateEnvironmentById(id, label, category, priority);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.delete("/:id", isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteEnvironment(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

route.patch("/:id", isValidEnvironmentId, async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;
    const data = await patchEnvironment(id, clientObj);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = route;
