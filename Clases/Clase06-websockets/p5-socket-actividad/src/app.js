import path from "path";
import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.routes.js"

const PORT = 3000;
const app = express();

const httpServer = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
const io = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", viewsRouter);


const messages = [];

io.on("connection", (socket) => {
  console.log("Nuevo cliente conectado: ", socket.id);

  socket.emit("all-msgs", messages)

  socket.on("new-msg", (data) => {
    messages.push({ message: data, socketid: socket.id });
    io.emit("all-msgs", messages)
  })

})