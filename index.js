import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
import cors from 'cors';
import router from './routes/router.js';

const app = express();

app.use(cors({
    origin: ['https://todo-list-fro.netlify.app','https://todo-list-fro.netlify.app/'],
    methods: ['GET', 'DELETE', 'PUT', 'POST'],
}));

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
