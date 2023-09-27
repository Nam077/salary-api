import express from 'express';

class IndexRoutes {
    constructor(app) {
        this.app = app;
        this.router = express.Router();

        this.init();
    }

    init() {
        this.router.get('/', (req, res) => {
            res.send('Hello World!');
        })
        this.router.post('/auth-login.php', (req, res) => {
            res.json({
                "status": "Ok",
                "reason": "",
                "link": "https:\/\/zalo.me\/hnem06",
                "phienban": "1.9",
                "thongbao": "\u0110\u00e3 Th\u00eam Ch\u1ee9c N\u0103ng T\u00ednh L\u1ea1i L\u01b0\u01a1ng Theo Th\u00e1ng"
            });
        })
        this.app.use('/', this.router);
    }
}

export default IndexRoutes