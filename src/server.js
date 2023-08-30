import express from 'express';
import  ApiRoutes  from './routes/api.routes'
class Server {

  constructor(port) {
    this.app = express();
    this.port = port;
  }
  init() {
    const apiRoutes = new ApiRoutes(this.app);
  }
  start() {
    this.init();
    this.app.listen(this.port, () => {
      console.log('Chạy thành công http://localhost:' + this.port);
    });
  }
}

const server = new Server(3000);
server.start();