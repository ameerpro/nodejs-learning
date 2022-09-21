const express = require("express");
const app = express();
const EventEmitter = require("events");
const event = new EventEmitter();

let count = 0;

app.use(express.json());

event.on("CountAPI", () => {
  count++;
  console.log("event called " + count);
});

app.get("/", (req, resp) => {
  event.emit("CountAPI");
  resp.send("api called");
});

app.get("/search", (req, resp) => {
  event.emit("CountAPI");
  resp.send("search api called");
});

app.get("/update", (req, resp) => {
  event.emit("CountAPI");
  resp.send("update api called");
});

app.listen(5500);
