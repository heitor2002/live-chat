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

    socket.emit("message", data);

    e.target.value = "";
  }
});

socket.on("message", (data) => {
  console.log(data);
  const messageDiv = document.getElementById("chat");

  messageDiv.innerHTML += `
              <div class="user" >
                <h5>${data.nickname}</h5>
                <h4>${data.text}</h4>
              </div>
  `;
});
