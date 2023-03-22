const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("nickname");
const room = urlSearch.get("room");

socket.emit("room", {
  username,
  room,
});

document.getElementById("message_user").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const message = e.target.value;

    const data = {
      room,
      username,
      message,
    };

    socket.on("message", data);

    e.target.value = "";
  }
});

console.log(username, room);
