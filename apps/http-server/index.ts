import express from "express"
import { client } from "@repo/db/client";

const app = express();
const port = 3002;

app.get("/", (req, res) => {
    res.status(200).json({
        message:'Server is healthy and up and running created by lomash'
    })
})

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();

    res.status(200).json(
        {
            message:'Users info fetched successfully',
            users
        }
    )
})


app.post("/user", async (req, res) => {
    const username = Math.floor(Math.random() * 10000 ).toString();
    const password = Math.floor(Math.random() * 10000 ).toString();

    const user = await client.user.create({
        data:{
            username: username,
            password: password
        }
    })

    res.status(200).json(
        {
            message:'User created successfully',
            user
        }
    )
})

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`)
})