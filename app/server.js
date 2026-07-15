/**
 * Simple Node.js server to send and receive messages using Express and Socket.IO
 *
 * @license Apache-2.0
 * @author Daniel M. Hendricks
 * @see {@link http://github.com/dmhendricks/docker-socketio-relay}
 */

import { readFileSync } from 'node:fs';
import { Server } from 'socket.io';
import http from 'node:http';
import path from 'node:path';
import express from 'express';
import cors from 'cors';
import pc from 'picocolors';

const pkg = JSON.parse( readFileSync( new URL( '../package.json', import.meta.url ) ) );

const PORT = process.env.PORT || 3000;
const debug = process.env.DEBUG || false;
const api_key = process.env.API_KEY;

const app = express();
const server = http.createServer( app );
// Reflect the request origin rather than sending a literal '*', so that
// credentialed requests (withCredentials) are not rejected by the browser.
const io = new Server( server, { cors: { origin: true, credentials: true } } );

app.use( cors({ origin: true, credentials: true }) );
app.use( express.json() );

// Start-up banner
console.log( pc.bold( `${pkg.config.app_name} v${pkg.version} by ${pkg.author.name} / ${pkg.author.url}` ) );
console.log( `License: ${pkg.license}` );
console.log( `GitHub: ${pkg.homepage}` );
console.log( `Docker: ${pkg.config.links.docker}` );

if( !api_key ) console.warn( pc.yellow( '[warn] API_KEY is not defined.' ) );

// Static routing
app.get( '/', ( req, res ) => res.status( 404 ).json({ code: 'ResourceNotFound', message: 'File Not Found' }) );
app.get( '/favicon.ico', ( req, res ) => res.sendFile( path.join( import.meta.dirname, 'public', 'favicon.ico' ) ) );

// Relay messages to connected clients
app.post( '/socket/:socket', ( req, res ) => {

    if( !api_key || req.query.api_key !== api_key ) {
        if( debug ) console.log( pc.red( `[error] Invalid API key from ${req.socket.remoteAddress}` ) );
        return res.status( 401 ).json({ code: 'InvalidCredentials', message: 'Unauthorized' });
    }

    if( debug ) console.log( '[msg]', req.body );
    io.emit( req.params.socket, req.body );
    res.json( req.body );

});

server.listen( PORT, () => console.log( '[init] %s initialized on port %d', pkg.name, PORT ) );
