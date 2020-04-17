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
var user_service_1 = require("./user.service");
var rest_client_service_1 = require("./rest-client.service");
var crypto_service_1 = require("./crypto.service");
var SecretService = /** @class */ (function () {
    function SecretService() {
    }
    SecretService.prototype.getAllSecrets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, secrets, _i, secrets_1, secret, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, user_service_1.userService.getUserInfo()];
                    case 1:
                        user = _b.sent();
                        secrets = user.receivedSecrets;
                        _i = 0, secrets_1 = secrets;
                        _b.label = 2;
                    case 2:
                        if (!(_i < secrets_1.length)) return [3 /*break*/, 5];
                        secret = secrets_1[_i];
                        _a = secret;
                        return [4 /*yield*/, this.calculateTimeLeft(secret.createdAt, secret.ttl)];
                    case 3:
                        _a.ttl = _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, secrets];
                }
            });
        });
    };
    SecretService.prototype.createSecret = function (secretObj) {
        return __awaiter(this, void 0, void 0, function () {
            var publicKey, cipher, secret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_service_1.userService.getPublicKeyByEmail(secretObj.recipientEmail)];
                    case 1:
                        publicKey = _a.sent();
                        return [4 /*yield*/, crypto_service_1.crypto.encrypt(secretObj.secret, publicKey)];
                    case 2:
                        cipher = _a.sent();
                        secretObj.secret = cipher;
                        return [4 /*yield*/, rest_client_service_1.rest.httpPost('/secret', secretObj)];
                    case 3:
                        secret = _a.sent();
                        return [2 /*return*/, secret];
                }
            });
        });
    };
    SecretService.prototype.readSecret = function (secret) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    SecretService.prototype.calculateTimeLeft = function (createdAt, ttl) {
        return __awaiter(this, void 0, void 0, function () {
            var currentTime, diff, diffDate, age;
            return __generator(this, function (_a) {
                currentTime = Date.now();
                diff = currentTime - Date.parse(createdAt);
                diffDate = new Date(diff);
                age = diffDate.getUTCHours();
                return [2 /*return*/, (24 * ttl - age)];
            });
        });
    };
    return SecretService;
}());
exports.secretService = new SecretService();
