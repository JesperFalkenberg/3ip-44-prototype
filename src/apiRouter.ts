import Router from 'express-promise-router';
import clothingRouter from './clothingRouter';

const apiRouter = Router()

apiRouter.use('/clothing', clothingRouter);

export default apiRouter;