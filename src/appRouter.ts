import Router from 'express-promise-router';
import {Request, Response, static as expressStatic} from 'express';
import ApiRouter from './apiRouter';
import path from 'path';

//TODO: @Jesper configure your own directory where you will store the html, css and js files
// the nodejs backend wil serve the static files so you can go to http://localhost:3000/index.html to open your webpage when this backend is running
const FRONTEND_BUILD_FILES = path.join(__dirname, '../frontend');
const appRouter = Router();

appRouter.use('/api', ApiRouter);
appRouter.use(expressStatic(FRONTEND_BUILD_FILES));
appRouter.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(FRONTEND_BUILD_FILES, 'despite-components.html'));
});

export default appRouter;