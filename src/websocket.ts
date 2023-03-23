import { io } from "./http";

interface RoomUser {
  socket_id: string;
  nickname: string;
  room: string;
}

interface Message {
  room: string;
  nickname: string;
  text: string;
  createAt: Date;
}

const users: RoomUser[] = [];
const messages: Message[] = [];

io.on("connection", (socket) => {
  socket.on("room", (data) => {
    const userInRoom = users.find(
      (user) => user.nickname === data.username && user.room === data.room
    );

    userInRoom
      ? (userInRoom.socket_id = socket.id)
      : users.push({
          room: data.room,
          nickname: data.username,
          socket_id: socket.id,
        });
  });

  socket.on("message", (data) => {
    // SALVAR MENSAGEM
    const message: Message = {
      text: data.message,
      room: data.room,
      nickname: data.username,
      createAt: new Date(),
    };

    messages.push(message);
    console.log(message)

    // ENVIAR MENSAGEM

    io.emit("message", message)
  });
});
