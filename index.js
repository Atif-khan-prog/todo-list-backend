import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();
app.use(cors({
    origin: 'https://todo-list-fro.netlify.app/',
    methods: ['GET', 'DELETE', 'PUT', 'POST'],
    credentials: true
}));
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log('running'));
