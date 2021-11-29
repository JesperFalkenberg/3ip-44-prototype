import {Request, Response} from 'express';
import { ClothingRepo } from './clothingrepo';

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

    async getAllInfo(req: Request, res: Response){
        const allInfo = await this.clothingRepo.getAllInfo();
        return res.send(JSON.stringify((allInfo)));
    }
}