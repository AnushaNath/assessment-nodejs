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
var DeserializerBase_1 = require("./DeserializerBase");
var V2Deserializer = /** @class */ (function (_super) {
    __extends(V2Deserializer, _super);
    function V2Deserializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    V2Deserializer.prototype.Deserialize = function (msg) {
        for (var i = 0; i < msg.length; i++) {
            if (msg[i] == '0') {
                if (msg[i - 1] == '0' && msg[i + 1] != '0') {
                    var x = i;
                    var fn = msg.substring(0, i + 1);
                    fn = fn.replace(/0/g, '');
                    break;
                }
            }
        }
        ;
        for (var j = x + 1; j < msg.length; j++) {
            if (msg[j] == '0') {
                if (msg[j - 1] == '0' && msg[j + 1] != '0') {
                    var y = j;
                    var ln = msg.substring(x + 1, j + 1);
                    ln = ln.replace(/0/g, '');
                    break;
                }
            }
        }
        var client = msg.substring(y + 1, msg.length);
        client = client.substring(0, 3) + '-' + client.substring(3, 7);
        this.firstName = fn;
        this.lastName = ln;
        this.clientId = client;
        return this;
    };
    return V2Deserializer;
}(DeserializerBase_1["default"]));
exports["default"] = V2Deserializer;
