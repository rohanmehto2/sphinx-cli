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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ui_service_1 = require("./ui.service");
var inquirer_1 = __importDefault(require("inquirer"));
var InquirerService = /** @class */ (function () {
    function InquirerService() {
    }
    InquirerService.prototype.askCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            var questions;
            return __generator(this, function (_a) {
                questions = [
                    {
                        name: 'email',
                        type: 'input',
                        message: ui_service_1.MESSAGES.ASK_EMAIL,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.ASK_EMAIL_ERR;
                            }
                        }
                    },
                    {
                        name: 'password',
                        type: 'password',
                        message: ui_service_1.MESSAGES.ASK_PWD,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.INVALID_INPUT;
                            }
                        }
                    }
                ];
                return [2 /*return*/, inquirer_1.default.prompt(questions)];
            });
        });
    };
    InquirerService.prototype.askConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var questions;
            return __generator(this, function (_a) {
                questions = [
                    {
                        name: 'sphinxServer',
                        type: 'input',
                        message: ui_service_1.MESSAGES.ASK_SERVER_ADDRS,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.ASK_SERVER_ADDRS_ERR;
                            }
                        }
                    },
                ];
                return [2 /*return*/, inquirer_1.default.prompt(questions)];
            });
        });
    };
    InquirerService.prototype.askName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var questions;
            return __generator(this, function (_a) {
                questions = [
                    {
                        name: 'name',
                        type: 'input',
                        message: ui_service_1.MESSAGES.ASK_NAME,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.INVALID_INPUT;
                            }
                        }
                    },
                ];
                return [2 /*return*/, inquirer_1.default.prompt(questions)];
            });
        });
    };
    InquirerService.prototype.askPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var questions;
            return __generator(this, function (_a) {
                questions = [
                    {
                        name: 'password',
                        type: 'password',
                        message: ui_service_1.MESSAGES.ASK_PWD,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.INVALID_INPUT;
                            }
                        }
                    },
                ];
                return [2 /*return*/, inquirer_1.default.prompt(questions)];
            });
        });
    };
    InquirerService.prototype.askNewPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var questions;
            return __generator(this, function (_a) {
                questions = [
                    {
                        name: 'password',
                        type: 'password',
                        message: ui_service_1.MESSAGES.ASK_NEW_PWD,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.INVALID_INPUT;
                            }
                        }
                    },
                    {
                        name: 'confirmPassword',
                        type: 'password',
                        message: ui_service_1.MESSAGES.ASK_CONFIRM_PWD,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.INVALID_INPUT;
                            }
                        }
                    },
                ];
                return [2 /*return*/, inquirer_1.default.prompt(questions)];
            });
        });
    };
    InquirerService.prototype.askKeyRotationConfirmation = function () {
        var questions = [
            {
                name: 'rotateKey',
                type: 'confirm',
                message: ui_service_1.MESSAGES.ASK_SURE,
                default: false,
            }
        ];
        return inquirer_1.default.prompt(questions);
    };
    InquirerService.prototype.askSecret = function () {
        return __awaiter(this, void 0, void 0, function () {
            var questions;
            return __generator(this, function (_a) {
                questions = [
                    {
                        name: 'recipientEmail',
                        type: 'input',
                        message: ui_service_1.MESSAGES.ASK_RECIPIENT,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.ASK_EMAIL_ERR;
                            }
                        }
                    },
                    {
                        name: 'secretName',
                        type: 'input',
                        message: ui_service_1.MESSAGES.ASK_SECRET_NAME,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.INVALID_INPUT;
                            }
                        }
                    },
                    {
                        name: 'secret',
                        type: 'password',
                        message: ui_service_1.MESSAGES.ASK_SECRET,
                        mask: true,
                        validate: function (value) {
                            if (value.length) {
                                return true;
                            }
                            else {
                                return ui_service_1.MESSAGES.INVALID_INPUT;
                            }
                        }
                    },
                    {
                        name: 'description',
                        type: 'input',
                        message: ui_service_1.MESSAGES.ASK_DESC,
                        default: ''
                    },
                    {
                        name: 'ttl',
                        type: 'number',
                        message: ui_service_1.MESSAGES.ASK_TTL,
                        default: 3
                    }
                ];
                return [2 /*return*/, inquirer_1.default.prompt(questions)];
            });
        });
    };
    InquirerService.prototype.askSelectSecret = function (secrets) {
        var choices = [];
        for (var idx in secrets) {
            choices.push({
                name: ui_service_1.MESSAGES.SECRET_CHOICE(secrets[idx]),
                value: idx,
            });
        }
        var questions = [
            {
                name: 'secret',
                type: 'list',
                message: ui_service_1.MESSAGES.ASK_SELECT_SECRET,
                choices: choices
            }
        ];
        return inquirer_1.default.prompt(questions);
    };
    return InquirerService;
}());
exports.inquirerService = new InquirerService();
