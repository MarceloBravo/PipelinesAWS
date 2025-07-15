/**
 * Simple HTTP server application for AWS Pipeline deployment demo
 * @module app
 */

const http = require('http');

/** @const {number} Port number for the server to listen on */
const port = 3000;

/**
 * Request handler function for the HTTP server
 * @param {http.IncomingMessage} req - The HTTP request object
 * @param {http.ServerResponse} res - The HTTP response object
 */
const requestHandler = (req, res) => {
    res.end('Aplicación desplegada automáticamente con AWS Pipeline');
};

// Create and start the server
const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});