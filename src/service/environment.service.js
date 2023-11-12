const { getAllEnvironmentDB,
    getAllEnvironmentByIdDB,
    createEnvironmentDB,
    updateEnvironmentByIdDB,
    deleteEnvironmentDB,
    patchEnvironmentDB } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentDB();
    return data;
};

async function getAllEnvironmentById(id) {
    const data = await getAllEnvironmentByIdDB(id);
    return data;
};

async function createEnvironment(label, category, priority) {
    const data = await createEnvironmentDB(label, category, priority);
    if (!data.length) throw new Error('this object is not found');
    return data;
};

async function updateEnvironmentById(id, label, category, priority) {
    const data = await updateEnvironmentByIdDB(id, label, category, priority);
    if (!data.length) throw new Error('this id is not found');
    return data;
};

async function deleteEnvironment(id) {
    const data = await deleteEnvironmentDB(id);
    if (!data.length) throw new Error('this id is not found');
    return data;
};

async function patchEnvironment(id,clientObj) {
    const data = await patchEnvironmentDB(id,clientObj);
    if (!data.length) throw new Error('this id is not found');
    return data;
};

module.exports = {
    getAllEnvironment,
    getAllEnvironmentById,
    createEnvironment,
    updateEnvironmentById,
    deleteEnvironment,
    patchEnvironment
};