"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var HandlerBase_1 = require("./HandlerBase");
var V2Deserializer_1 = require("../Deserializers/V2Deserializer");
var V1Handler = /** @class */ (function (_super) {
    __extends(V1Handler, _super);
    function V1Handler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    V1Handler.prototype.Handle = function (text) {
        var v2Deserializer = new V2Deserializer_1["default"]();
        v2Deserializer.Deserialize(text);
        return v2Deserializer.Deserialize(text);
    };
    return V1Handler;
}(HandlerBase_1["default"]));
exports["default"] = V1Handler;
