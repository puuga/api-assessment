const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const consola = require('consola');

const { APP_PORT, APP_ENV } = require('./configs/global.config');

// Config logger
if (APP_ENV !== 'dev') {
    // TODO: config the consola to fire logs to ... with log formated
}

// Config express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Register route
const routerV1 = require('./routers/api.v1.router');
app.use('/api/v1', routerV1);

app.use('/', (req, res) => {
    res.send('API - assessment');
});


// -------------------------------------------------------------------------------------
// activate app
const server = app.listen(APP_PORT, () => consola.log(`Jane V2 app listening on port ${APP_PORT}!`));


// -------------------------------------------------------------------------------------
// Graceful Shutdown
const gracefulShutdown = () => {
    consola.info('Got SIGTERM. Graceful shutdown start', new Date().toISOString());
    server.close(() => {
        consola.log('Closed out remaining connections.');
        process.exit();
    });
    setTimeout(() => {
        consola.error('Could not close connections in time, forcefully shutting down');
        process.exit();
    }, 10 * 1000);
};
// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);
// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);