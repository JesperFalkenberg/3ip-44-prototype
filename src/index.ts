import express from 'express';
import AppRouter from './appRouter';

let app = express();
app.use(AppRouter);
app.listen(3000);
