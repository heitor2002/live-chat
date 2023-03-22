const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("nickname");
const room = urlSearch.get("room")

console.log(username, room)
