import {Request, Response} from 'express';
import {ClothingRepo} from './clothingRepo';

export class ClothingController{
    private static INSTANCE: ClothingController;
    private clothingRepo: ClothingRepo;

    private constructor(){
        this.clothingRepo = ClothingRepo.getInstance();
    }

    static getInstance(): ClothingController{
        if(!this.INSTANCE){
            this.INSTANCE = new ClothingController();
        }
        return this.INSTANCE;
    }

    async getAvgList(req: Request, res: Response){
        const allInfo = await this.clothingRepo.getAvgList();
        return res.send(JSON.stringify((allInfo)));
    }

    async getProductList(req: Request, res: Response){
        const allInfo = await this.clothingRepo.getProductList();
        return res.send(JSON.stringify((allInfo)));
    }

    async getStepList(req: Request, res: Response){
        const allInfo = await this.clothingRepo.getStepList();
        return res.send(JSON.stringify((allInfo)));
    }
}