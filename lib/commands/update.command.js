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
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_service_1 = require("../lib/inquirer.service");
var rest_client_service_1 = require("../lib/rest-client.service");
var conf_service_1 = require("../lib/conf.service");
var user_service_1 = require("../lib/user.service");
var ui_service_1 = require("../lib/ui.service");
var auth_service_1 = require("../lib/auth.service");
var chalk = require('chalk');
var log = console.log;
var Update = /** @class */ (function () {
    function Update() {
    }
    Update.prototype.changePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pwd, correct, newPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conf_service_1.config.isConfigured()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, auth_service_1.authService.isLoggedIn()];
                    case 2:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, inquirer_service_1.inquirerService.askPassword()];
                    case 3:
                        pwd = _a.sent();
                        return [4 /*yield*/, auth_service_1.authService.verifyPassword(pwd.password)];
                    case 4:
                        correct = _a.sent();
                        if (!correct) {
                            log(ui_service_1.MESSAGES.INCORRECT_PASSWORD);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, inquirer_service_1.inquirerService.askNewPassword()];
                    case 5:
                        newPassword = _a.sent();
                        if (newPassword.password !== newPassword.confirmPassword) {
                            log(ui_service_1.MESSAGES.PWD_MATCH_ERR);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, user_service_1.userService.updateUser({ password: newPassword.password })];
                    case 6:
                        _a.sent();
                        log(ui_service_1.MESSAGES.PWD_CHANGE_SUCCESS);
                        return [2 /*return*/];
                }
            });
        });
    };
    Update.prototype.changeName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, conf_service_1.config.isConfigured()];
                    case 1:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, auth_service_1.authService.isLoggedIn()];
                    case 2:
                        if (!(_a.sent()))
                            return [2 /*return*/];
                        return [4 /*yield*/, inquirer_service_1.inquirerService.askName()];
                    case 3:
                        name = _a.sent();
                        return [4 /*yield*/, rest_client_service_1.rest.httpPut('/member', conf_service_1.config.getEmail(), { name: name.name })];
                    case 4:
                        user = _a.sent();
                        log(ui_service_1.MESSAGES.NAME_CHANGE_SUCCESS);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Update;
}());
exports.update = new Update();
