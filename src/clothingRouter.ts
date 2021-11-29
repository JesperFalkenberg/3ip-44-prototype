import Router from 'express-promise-router';
import {ClothingController} from './clothingController';
import {Request, Response} from 'express';

const clothingRouter = Router();
const clothingController = ClothingController.getInstance();

clothingRouter.get('/avgList', (req: Request, res: Response) => clothingController.getAvgList(req,res));
clothingRouter.get('/productList', (req: Request, res: Response) => clothingController.getProductList(req,res));
clothingRouter.get('/stepList', (req: Request, res: Response) => clothingController.getStepList(req,res));

export default clothingRouter;