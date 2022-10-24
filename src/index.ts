import express from 'express';
import dotenv from 'dotenv'

class App {
    app: express.Application;

    constructor() {
        this.app = express();
    }
}

dotenv.config();

const app = new App().app;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello');
});

app.listen(process.env.PORT, () => {
    console.log('Started server with 8080');
});​