import { io } from "./http";

interface RoomUser {
  socket_id: string;
  nickname: string;
  room: string;
}

const users: RoomUser[] = [];

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

        console.log(users)
  });
});
