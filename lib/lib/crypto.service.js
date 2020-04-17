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
var keytar = require('keytar');
var os = require('os');
var openpgp = require('openpgp');
var password = require('secure-random-password');
var CryptoService = /** @class */ (function () {
    function CryptoService() {
        this.keytarAccount = os.userInfo().username;
    }
    // TODO: find a good design pattern to instantiate these variables
    // private readonly sphinxKey = null;
    // private readonly sphinxPassphrase = null;
    CryptoService.prototype.encrypt = function (plaintext, publicKeyArmored) {
        return __awaiter(this, void 0, void 0, function () {
            var encrypted, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = openpgp).encrypt;
                        _c = {
                            message: openpgp.message.fromText(plaintext)
                        };
                        return [4 /*yield*/, openpgp.key.readArmored(publicKeyArmored)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.publicKeys = (_d.sent()).keys,
                                _c)])];
                    case 2:
                        encrypted = (_d.sent()).data;
                        return [2 /*return*/, encrypted];
                }
            });
        });
    };
    CryptoService.prototype.decrypt = function (ciphertext, publicKeyArmored) {
        return __awaiter(this, void 0, void 0, function () {
            var privateKeyArmored, passphrase, privateKey, decrypted, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, keytar.getPassword('sphinxKey', this.keytarAccount)];
                    case 1:
                        privateKeyArmored = _d.sent();
                        return [4 /*yield*/, keytar.getPassword('sphinxPassphrase', this.keytarAccount)];
                    case 2:
                        passphrase = _d.sent();
                        return [4 /*yield*/, openpgp.key.readArmored(privateKeyArmored)];
                    case 3:
                        privateKey = (_d.sent()).keys[0];
                        return [4 /*yield*/, privateKey.decrypt(passphrase)];
                    case 4:
                        _d.sent();
                        _b = (_a = openpgp).decrypt;
                        _c = {};
                        return [4 /*yield*/, openpgp.message.readArmored(ciphertext)];
                    case 5:
                        _c.message = _d.sent();
                        return [4 /*yield*/, openpgp.key.readArmored(publicKeyArmored)];
                    case 6: return [4 /*yield*/, _b.apply(_a, [(
                            // TODO: verify signature
                            _c.publicKeys = (_d.sent()).keys,
                                _c.privateKeys = [privateKey],
                                _c)])];
                    case 7:
                        decrypted = (_d.sent()).data;
                        return [2 /*return*/, decrypted];
                }
            });
        });
    };
    CryptoService.prototype.generateKeyPair = function (name, email) {
        return __awaiter(this, void 0, void 0, function () {
            var passphrase, _a, privateKeyArmored, publicKeyArmored;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        passphrase = password.randomString({ length: 512 });
                        return [4 /*yield*/, openpgp.generateKey({
                                userIds: [{ name: name, email: email }],
                                curve: 'ed25519',
                                passphrase: passphrase
                            })];
                    case 1:
                        _a = _b.sent(), privateKeyArmored = _a.privateKeyArmored, publicKeyArmored = _a.publicKeyArmored;
                        return [4 /*yield*/, keytar.setPassword('sphinxKey', this.keytarAccount, privateKeyArmored)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, keytar.setPassword('sphinxPassphrase', this.keytarAccount, passphrase)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, publicKeyArmored];
                }
            });
        });
    };
    // async generateDetachedSignature(): Promise<object> {
    //     const privateKeyArmored = await keytar.getPassword('sphinxKey', this.keytarAccount);
    //     const passphrase = await keytar.getPassword('sphinxPassphrase', this.keytarAccount);
    //     const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
    //     await privateKey.decrypt(passphrase);
    //     const clearText = password.randomPassword();
    //     const { signature: detachedSignature } = await openpgp.sign({
    //         message: openpgp.cleartext.fromText(clearText),
    //         privateKeys: [privateKey],
    //         detached: true
    //     });
    //     return {
    //         clearText,
    //         detachedSignature
    //     }
    // }
    // async verifyDetachedSignature(sign: string, clearText: string, publicKeyArmored: string): Promise<boolean> {
    //     const verified = await openpgp.verify({
    //         message: openpgp.cleartext.fromText(clearText),
    //         signature: await openpgp.signature.readArmored(sign),
    //         publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys
    //     });
    //     const { valid } = verified.signatures[0];
    //     if (valid)
    //         return true;
    //     return false;
    // }
    CryptoService.prototype.keyExists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, keytar.getPassword('sphinxKey', this.keytarAccount)];
                    case 1:
                        key = _a.sent();
                        if (key != null)
                            return [2 /*return*/, false];
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return CryptoService;
}());
exports.crypto = new CryptoService();
