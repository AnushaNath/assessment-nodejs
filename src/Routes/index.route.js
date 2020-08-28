"use strict";
exports.__esModule = true;
var express_1 = require("express");
var IndexController_1 = require("../Controllers/IndexController");
var IndexRoute = /** @class */ (function () {
    function IndexRoute() {
        this.path = '/';
        this.pathV1 = '/api/v1/parse';
        this.pathV2 = '/api/v2/parse';
        this.router = express_1.Router();
        this.indexController = new IndexController_1["default"]();
        this.initializeRoutes();
    }
    IndexRoute.prototype.initializeRoutes = function () {
        this.router.get("" + this.path, this.indexController.index);
    };
    return IndexRoute;
}());
exports["default"] = IndexRoute;
