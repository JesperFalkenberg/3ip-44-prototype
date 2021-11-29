import Router from 'express-promise-router';
import {ClothingController} from './clothingController';
import {Request, Response} from 'express';

const clothingRouter = Router();
const clothingController = ClothingController.getInstance();

clothingRouter.get('/', (req: Request, res: Response) => clothingController.getAllInfo(req,res));

export default clothingRouter;