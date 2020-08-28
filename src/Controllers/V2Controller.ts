import Result from './../Model/Result';
import V2Handler from "../Handlers/V2Handler";
import Data from '../Model/data';
import { Request, Response } from 'express';

export class V2Controller{

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
        const v2Handler: V2Handler = new V2Handler();
        const data: Data = v2Handler.Handle(req.body.data || "");
        
        res.data = data;
        res.message = "Success";
        res.statusCode = 200;
        
    }
    
}

