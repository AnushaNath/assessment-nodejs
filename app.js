"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var Routes_1 = require("./src/Routes/Routes");
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new Routes_1["default"]();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
exports["default"] = new App().app;
//export default App;
