import Result from './../Model/Result';
import V1Handler from "../Handlers/V1Handler";
import Data from '../Model/data';
import { Request, Response } from 'express';

export class V1Controller{

    public parse (req: Request, res: Result) { 

        if(!req.body.data || req.body.data.length <= 0){
            res.data = null;
            res.message = "Input text cannot be blank";
            res.statusCode = 400;
            return;
        }   

        else if (req.body.data && req.body.data.length < 25){
            res.data = null;
            res.message = "Input text cannot be less than 25 characters";
            res.statusCode = 400;
            return;
        }

        const v1Handler: V1Handler = new V1Handler();
        const data: Data = v1Handler.Handle(req.body.data || "");
        
        res.data = data;
        res.message = "Success";
        res.statusCode = 200;
        
    }
      
}