import { io } from "socket.io-client";
const ENDPOINT = "ws://localhost:8900"
export default io(ENDPOINT)