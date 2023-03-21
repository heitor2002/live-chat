import { serverHttp, port } from "./http";
import "./websocket";

serverHttp.listen(port, () => {
  console.log("server is running");
});
