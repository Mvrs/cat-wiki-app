import { port } from "./config/index.config";
import Server from "./app";

const server = new Server(port);

server.start();
