#!/usr/bin/env node
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
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.red(figlet.textSync('sphinx-cli', { horizontalLayout: 'full' })));
// program
//   .version('0.0.1')
//   .description("An example CLI for ordering pizza's")
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq', 'Add bbq sauce')
//   .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
//   .option('-C, --no-cheese', 'You do not want any cheese')
//   .parse(process.argv);
//   if (!process.argv.slice(2).length) {
//     program.outputHelp();
//   }
//dev scripts
var httpClient = require('./lib/rest-client');
var crypto_1 = require("./lib/crypto");
// const rest = new RestService();
// const crypto = new CryptoService()
var test = function () { return __awaiter(void 0, void 0, void 0, function () {
    var url, args, path, data, updateData, id, _a, _b, publicKey, cipher, plain;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                url = 'http://localhost:3000/member';
                args = {
                    params: {
                        id: '442f0ebe-39b5-4698-91f5-28298b3d83c0'
                    }
                };
                path = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
                // console.log(await rest.httpGet(url, path));
                url = 'http://localhost:3000/secret';
                data = {
                    secretName: "RDS jaskldPasswordasd prod",
                    secret: "ajsd8asn0d0annda;ksdlcabdsdabsudbas9d8bas89dbsdasoudaubsado8b",
                    receiver: "442f0ebe-39b5-4698-91f5-28298b3d83c0",
                    sender: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c",
                    createdBy: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c"
                };
                // console.log(await rest.httpPost(url, data));
                url = 'http://localhost:3000/member';
                updateData = {
                    name: "Rohan Mehto",
                    publicKey: "updated"
                };
                id = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
                // console.log(await rest.httpPut(url, id, updateData))
                _b = (_a = console).log;
                return [4 /*yield*/, crypto_1.crypto.keyExists()];
            case 1:
                // console.log(await rest.httpPut(url, id, updateData))
                _b.apply(_a, [_c.sent()]);
                return [4 /*yield*/, crypto_1.crypto.generateKeyPair('Rohan Mehto', 'rohan@cai.fi')];
            case 2:
                publicKey = _c.sent();
                return [4 /*yield*/, crypto_1.crypto.encrypt('THis is my secret', publicKey)];
            case 3:
                cipher = _c.sent();
                console.log(cipher);
                return [4 /*yield*/, crypto_1.crypto.decrypt(cipher, publicKey)];
            case 4:
                plain = _c.sent();
                console.log(plain);
                return [2 /*return*/];
        }
    });
}); };
test();
