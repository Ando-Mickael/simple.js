require("dotenv").config();
const { Pool } = require("pg");
const knex = require("knex");

function getPoolConnection() {
    const result = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    });

    return result;
}

function getKnexConnection() {
    const result = knex({
        client: process.env.DB_CLIENT,
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },
        debug: true
    });

    return result;
}

function select(knexConnection, tabelName, dataIdentifier = {}) {
    return knexConnection(tabelName)
        .select()
        .where(dataIdentifier);
}

function insert(knexConnection, tableName, data) {
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

function deleteData(knexConnection, tableName, dataIdentifier) {
    return knexConnection(tableName)
        .delete()
        .where(dataIdentifier)
        .returning("*");
}

module.exports = {
    getPoolConnection,
    getKnexConnection,
    select,
    insert,
    update,
    deleteData
};