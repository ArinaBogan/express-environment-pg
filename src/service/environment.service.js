const { getAllEnvironmentDB, getAllEnvironmentByIdDB } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB();
    return data;
};

async function getAllEnvironmentById(id) {
    const data = await getAllEnvironmentByIdDB(id);
    return data;
};

module.exports = { getAllEnvironment, getAllEnvironmentById }