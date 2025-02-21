import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const ws = new WebSocketServer({port:3001})

ws.on("connection", (socket) => {
    socket.on("message", async (data) => {
        const username = Math.floor(Math.random() * 10000).toString();
        const password = Math.floor(Math.random() * 10000).toString();

        await client.user.create(
            {
                data:{
                    username: username,
                    password: password
                }
            }
        )
        socket.send(JSON.stringify(data.toString()));
    })
})

console.log('Web socket sever started at port 3001')