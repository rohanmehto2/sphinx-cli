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
var rest_client_service_1 = require("./rest-client.service");
var conf_service_1 = require("./conf.service");
var ui_service_1 = require("./ui.service");
var jsonwebtoken_1 = require("jsonwebtoken");
var crypto_service_1 = require("./crypto.service");
var user_service_1 = require("./user.service");
var keytar = require('keytar');
var os = require('os');
var log = console.log;
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.keytarAccount = os.userInfo().username;
    }
    AuthService.prototype.login = function (credentials) {
        return __awaiter(this, void 0, void 0, function () {
            var tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, rest_client_service_1.rest.httpPost('/login', credentials)];
                    case 1:
                        tokens = _a.sent();
                        conf_service_1.config.setJwtPublicKey(tokens.jwtPublicKey);
                        return [4 /*yield*/, this.setRefreshToken(tokens.refreshToken)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setAccessToken(tokens.accessToken)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, crypto_service_1.crypto.keyExists()];
                    case 4:
                        if (!!(_a.sent())) return [3 /*break*/, 6];
                        return [4 /*yield*/, user_service_1.userService.setUpKeys()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRefreshToken()];
                    case 1:
                        refreshToken = _a.sent();
                        return [4 /*yield*/, rest_client_service_1.rest.httpPost('/logout', { refreshToken: refreshToken })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.deleteRefreshToken()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.deleteAccessToken()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, keytar.getPassword('sphinxAccessToken', this.keytarAccount)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.getRefreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, keytar.getPassword('sphinxRefreshToken', this.keytarAccount)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthService.prototype.setAccessToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, keytar.setPassword('sphinxAccessToken', this.keytarAccount, token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.setRefreshToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, keytar.setPassword('sphinxRefreshToken', this.keytarAccount, token)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.deleteAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, keytar.deletePassword('sphinxAccessToken', this.keytarAccount)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.deleteRefreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, keytar.deletePassword('sphinxRefreshToken', this.keytarAccount)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.fetchAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, token, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 7]);
                        return [4 /*yield*/, this.getRefreshToken()];
                    case 1:
                        refreshToken = _a.sent();
                        return [4 /*yield*/, rest_client_service_1.rest.httpPost('/token', { refreshToken: refreshToken })];
                    case 2:
                        token = _a.sent();
                        return [4 /*yield*/, this.setAccessToken(token.accessToken)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        err_1 = _a.sent();
                        if (!(err_1.message == 'refreshTokenExpired')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.logout()];
                    case 5:
                        _a.sent();
                        log(ui_service_1.MESSAGES.LOGGED_OUT);
                        _a.label = 6;
                    case 6: return [2 /*return*/, false];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.isLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var publicKey, accessToken, payload, err_2, tokenUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 8]);
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        if ((_a.sent()) == null) {
                            log(ui_service_1.MESSAGES.LOGIN_REQ);
                            return [2 /*return*/, false];
                        }
                        publicKey = Buffer.from(conf_service_1.config.getJwtPublicKey(), 'utf8');
                        return [4 /*yield*/, this.getAccessToken()];
                    case 2:
                        accessToken = _a.sent();
                        return [4 /*yield*/, jsonwebtoken_1.verify(accessToken, publicKey)];
                    case 3:
                        payload = _a.sent();
                        return [2 /*return*/, true];
                    case 4:
                        err_2 = _a.sent();
                        if (!(err_2.name == 'TokenExpiredError')) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.fetchAccessToken()];
                    case 5:
                        tokenUpdated = _a.sent();
                        if (!tokenUpdated) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.isLoggedIn()];
                    case 6: return [2 /*return*/, _a.sent()];
                    case 7:
                        log(ui_service_1.MESSAGES.NOT_LOGGED_IN);
                        return [2 /*return*/, false];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.verifyPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var verified, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, rest_client_service_1.rest.httpPost('/verify', { password: password })];
                    case 1:
                        verified = _a.sent();
                        if (verified)
                            return [2 /*return*/, true];
                        return [2 /*return*/, false];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
exports.authService = new AuthService();
