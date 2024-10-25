import { io, server, app, port } from "./config";
import { middlewareJson, middlewareUrlencoded } from "./middlewares";
import { Response, Request } from 'express'


// soket io connection ---

io.on("connection", (socket) => {

    console.log("a user connected");

    socket.on("add_comment", (data) => {
        socket.broadcast.emit("res_add_comment", {
            id: socket.id,
        });
    });

});

// soket io connection ---


// soket io event ---

app.post("/event", middlewareJson, middlewareUrlencoded, (req: Request, res: Response) => {

    const validated: boolean = /^[a-zA-Z]+$/.test(req.body.event);

    if (validated) {

        console.log(req.body.event)

        if (req.body.event === "newUrl") {

            io.emit("event", req.body.event);
            
        }

        

        return res.json([req.body]);

    }

    return res.status(404).json({ msg: "error 404" });


});

// soket io event ---

server.listen(port, () => {

    console.log(`listening on http://localhost:${port}`);

});