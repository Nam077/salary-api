import express from 'express';
import  ApiRoutes  from './routes/api.routes'
import  IndexRoutes  from './routes/index.routes'
class Server {

  constructor(port) {
    this.app = express();
    this.port = port;
  }
  init() {
     new ApiRoutes(this.app);
     new IndexRoutes(this.app);
    
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