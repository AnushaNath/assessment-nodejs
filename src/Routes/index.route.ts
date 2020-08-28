import { Router } from 'express';
import IndexController from '../Controllers/IndexController';
import Route from '../Interfaces/routes.interface';

class IndexRoute implements Route {
  public path = '/';
  public pathV1 = '/api/v1/parse';
  public pathV2 = '/api/v2/parse';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;
