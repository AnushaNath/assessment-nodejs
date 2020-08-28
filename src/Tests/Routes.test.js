"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var request = require("supertest");
var app_1 = require("../../app");
var index_route_1 = require("../Routes/index.route");
var msg = {
    data: "JOHN0000MICHAEL0009994567"
};
var indexRoute = new index_route_1["default"]();
var app = new app_1["default"]();
describe('POST /api/V1/parse', function () {
    var _this = this;
    it('respond with correct firstName v1 parse', function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(app.getServer())
                        .post("" + indexRoute.pathV1)
                        .send(msg)];
                case 1:
                    res = _a.sent();
                    expect(res.body.result.data.firstName).toEqual("JOHN0000");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('POST /api/V1/parse', function () {
    var _this = this;
    it('respond with correct lastName v1 parse', function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(app.getServer())
                        .post("" + indexRoute.pathV1)
                        .send(msg)];
                case 1:
                    res = _a.sent();
                    expect(res.body.result.data.lastName).toEqual("MICHAEL000");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('POST /api/V1/parse', function () {
    var _this = this;
    it('respond with correct clientId v1 parse', function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(app.getServer())
                        .post("" + indexRoute.pathV1)
                        .send(msg)];
                case 1:
                    res = _a.sent();
                    expect(res.body.result.data.clientId).toEqual("9994567");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('POST /api/V2/parse', function () {
    var _this = this;
    it('respond with correct firstName v2 parse', function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(app.getServer())
                        .post("" + indexRoute.pathV2)
                        .send(msg)];
                case 1:
                    res = _a.sent();
                    expect(res.body.result.data.firstName).toEqual("JOHN");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('POST /api/V2/parse', function () {
    var _this = this;
    it('respond with correct lastName v2 parse', function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(app.getServer())
                        .post("" + indexRoute.pathV2)
                        .send(msg)];
                case 1:
                    res = _a.sent();
                    expect(res.body.result.data.lastName).toEqual("MICHAEL");
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('POST /api/V2/parse', function () {
    var _this = this;
    it('respond with correct clientId v2 parse', function () { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request(app.getServer())
                        .post("" + indexRoute.pathV2)
                        .send(msg)];
                case 1:
                    res = _a.sent();
                    expect(res.body.result.data.clientId).toEqual("999-4567");
                    return [2 /*return*/];
            }
        });
    }); });
});
