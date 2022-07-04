import debug from 'debug';
debug('app:socket')

import { Server as HttpServer } from 'http';
import { Server } from "socket.io";

export function init(httpServer: HttpServer) {
    debug('initializing');

    const io = new Server(httpServer, { /* options */ });
    console.log('socket.io started')
    io.on('connection', client => {
        console.log('socket.io connected')
        //return {client: client, io: io};

        client.on('join', join => {
            console.log('joining room', join.room)
            console.log(join)
            client.join(join.room);
        });
    });
    return io;
}



