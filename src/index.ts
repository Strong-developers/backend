import express from 'express';
import dotenv from 'dotenv'

// 라우터 불러오기
import {testRouter} from './routes';

class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }
}

dotenv.config();

const app = new App().app;

app.get('/', testRouter);

app.listen(process.env.PORT, () => {
    console.log('http://localhost:3002');
});​