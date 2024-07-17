import { io, server, app } from "./config.js";
import { middlewareJson, middlewareUrlencoded } from "./middlewares.js";

io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("add_comment", (data) => {
        socket.broadcast.emit("res_add_comment", {
            id: socket.id,
        });
    });
});

app.post("/event", middlewareJson, middlewareUrlencoded, (req, res) => {
    const validated = /^[a-z]+$/.test(req.body.event);

    if (validated) {
        io.emit("event", req.body.event);
        return res.json([req.body]);
    }

    return res.status(404).json({ msg: "error 404" });
});

app.post("/test", middlewareJson, middlewareUrlencoded ,(req, res) => {

    io.emit("event", req.body.event);

    return res.json(["hi"]);

});

server.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});
