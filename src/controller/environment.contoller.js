const express = require('express');
const { getAllEnvironment, getAllEnvironmentById, createEnvironment, updateEnvironmentById, deleteEnvironment } = require('../service/environment.service');
const route = express.Router();

route.get('/', async (req, res) => {
    const data = await getAllEnvironment();
    res.send(data);
});

route.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getAllEnvironmentById(id);
    res.send(data);
});

route.post('/', async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await createEnvironment(label, category, priority)
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await updateEnvironmentById(id, label, category, priority)
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteEnvironment(id)
        res.send(data);
    } catch (error) {
        res.send(error.message)
    }
});

module.exports = route;