const { getKnexConnection, select, insert, update, deleteData } = require("../config/database");

async function findAll(req, res) {
    const { table } = req.params;
    const { ...filters } = req.query;
    const knexConnection = getKnexConnection();

    let query = knexConnection(table).select();

    Object.entries(filters).map(([key, value]) => {
        query = query.where(key, 'like', `%${value}%`);
    })

    query
        .then((data) => res.json(data))
        .catch((error) => console.log(error))
        .finally(() => knexConnection.destroy());
}

function findById(req, res) {
    const { id, table } = req.params;
    const knexConnection = getKnexConnection();

    select(knexConnection, table, { id }).then(data => {
        res.json(data);
        knexConnection.destroy();
    });
}

function save(req, res) {
    const { table } = req.params;
    const knexConnection = getKnexConnection();

    insert(knexConnection, table, req.body).then(data => {
        res.json(data);
        knexConnection.destroy();
    });
}

function updateOne(req, res) {
    const { id, table } = req.params;
    const knexConnection = getKnexConnection();

    update(knexConnection, table, { id }, req.body).then(data => {
        res.json(data);
        knexConnection.destroy();
    });
}

function deleteOne(req, res) {
    const { id, table } = req.params;
    const knexConnection = getKnexConnection();

    deleteData(knexConnection, table, { id }).then(data => {
        res.json(data);
        knexConnection.destroy();
    });
}

module.exports = {
    findAll,
    findById,
    save,
    updateOne,
    deleteOne
}