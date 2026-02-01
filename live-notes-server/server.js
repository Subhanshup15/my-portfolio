const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

// store note in RAM (no database)
let currentNote = "";

wss.on("connection", (ws) => {
  console.log("🟢 User connected");

  // send previous note to new user
  ws.send(currentNote);

  ws.on("message", (message) => {
    currentNote = message.toString();

    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(currentNote);
      }
    });
  });

  ws.on("close", () => {
    console.log("🔴 User disconnected");
  });
});

console.log("🚀 WebSocket server running on ws://localhost:8080");
