"use strict";
exports.__esModule = true;
var express_1 = require("express");
var V1Controller_1 = require("../Controllers/V1Controller");
var V2Controller_1 = require("../Controllers/V2Controller");
var IndexController_1 = require("../Controllers/IndexController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.v1Controller = new V1Controller_1.V1Controller();
        this.v2Controller = new V2Controller_1.V2Controller();
        this.path = '/';
        this.router = express_1.Router();
        this.indexController = new IndexController_1["default"]();
        this.initializeRoutes();
    }
    Routes.prototype.initializeRoutes = function () {
        this.router.get("" + this.path, this.indexController.index);
    };
    Routes.prototype.routes = function (app) {
        var _this = this;
        app.route('/api/v1/parse')
            .post(function (req, res) {
            var result = {};
            _this.v1Controller.parse(req, result);
            res.status(res.statusCode).send({
                result: result
            });
        });
        app.route('/api/v2/parse')
            .post(function (req, res) {
            var result = {};
            _this.v2Controller.parse(req, result);
            res.status(res.statusCode).send({
                result: result
            });
        });
    };
    return Routes;
}());
exports["default"] = Routes;
