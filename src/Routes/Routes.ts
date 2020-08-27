import {Request, Response} from "express";
import { Router } from 'express';
import { V1Controller } from "../Controllers/V1Controller";
import { V2Controller } from "../Controllers/V2Controller";
import IndexController from '../Controllers/IndexController';
import Result from './../Model/Result';
import Data from '../Model/data';

export default class Routes {  

    public v1Controller: V1Controller = new V1Controller();
    public v2Controller: V2Controller = new V2Controller(); 
    public path = '/';
    public router = Router();
    public indexController = new IndexController();
    constructor() {
        this.initializeRoutes();
      }

      private initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.index);
      }
    
    public routes(app): void {          
        
        app.route('/api/v1/parse')
        .post((req: Request, res: Response) => {  
            let result: Result = {} as Result;
            this.v1Controller.parse(req, result)  
            res.status(200).send({
                result : result
            })
        })

        app.route('/api/v2/parse')
        .post((req: Request, res: Response) => {  
            let result: Result = {} as Result;
            this.v2Controller.parse(req, result)  
            res.status(200).send({
                result : result
            })
        })
    }
}

