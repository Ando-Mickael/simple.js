require("dotenv").config();

function runServer(app) {
    const port = process.env.APP_PORT;
    const url = `http://localhost:${port}`;

    if (port == undefined) {
        app.listen(port, () => console.log(`\n> ${url}/\n`));
    }
}

module.exports = {
    runServer,
}