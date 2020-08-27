"use strict";
exports.__esModule = true;
exports.V2Controller = void 0;
var V2Handler_1 = require("../Handlers/V2Handler");
var V2Controller = /** @class */ (function () {
    function V2Controller() {
    }
    V2Controller.prototype.parse = function (req, res) {
        console.log("req.body.data", req.body.data);
        if (!req.body.data || req.body.data.length <= 0) {
            res.data = null;
            res.message = "Input text cannot be blank";
            res.statusCode = 400;
            return;
        }
        else if (req.body.data && req.body.data.length < 25) {
            res.data = null;
            res.message = "Input text cannot be less than 25 characters";
            res.statusCode = 400;
            return;
        }
        var v2Handler = new V2Handler_1["default"]();
        console.log("Data " + req.body.data);
        var data = v2Handler.Handle(req.body.data || "");
        console.log("Controller " + data);
        res.data = data;
        res.message = "Success";
        res.statusCode = 200;
    };
    return V2Controller;
}());
exports.V2Controller = V2Controller;
