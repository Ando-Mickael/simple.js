function find(knexConnection, tabelName, dataIdentifier = {}) {
    return knexConnection(tabelName)
        .select()
        .where(dataIdentifier);
}

function save(knexConnection, tableName, data) {
    return knexConnection(tableName)
        .insert(data)
        .returning("*");
}

function update(knexConnection, tableName, dataIdentifier, newData) {
    return knexConnection(tableName)
        .update(newData)
        .where(dataIdentifier)
        .returning("*");
}

function remove(knexConnection, tableName, dataIdentifier) {
    return knexConnection(tableName)
        .delete()
        .where(dataIdentifier)
        .returning("*");
}

module.exports = {
    find,
    save,
    update,
    remove,
}