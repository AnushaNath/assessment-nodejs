"use strict";
exports.__esModule = true;
exports.V1Controller = void 0;
var V1Handler_1 = require("../Handlers/V1Handler");
var V1Controller = /** @class */ (function () {
    function V1Controller() {
    }
    V1Controller.prototype.parse = function (req, res) {
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
        var v1Handler = new V1Handler_1["default"]();
        var data = v1Handler.Handle(req.body.data || "");
        res.data = data;
        res.message = "Success";
        res.statusCode = 200;
    };
    return V1Controller;
}());
exports.V1Controller = V1Controller;
