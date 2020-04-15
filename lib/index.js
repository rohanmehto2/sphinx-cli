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
var log = console.log;
var list_command_1 = require("./commands/list.command");
var login_command_1 = require("./commands/login.command");
var logout_command_1 = require("./commands/logout.command");
var configure_command_1 = require("./commands/configure.command");
var ui_service_1 = require("./lib/ui.service");
var rotate_command_1 = require("./commands/rotate.command");
var update_command_1 = require("./commands/update.command");
var create_command_1 = require("./commands/create.command");
// clear();
log(chalk.red(figlet.textSync('sphinx-cli', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description('Sphinx CLI tool to share secrets');
program
    .command('list <resource>')
    .alias('ls')
    .description('List members or secrets')
    .action(function (resource) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = resource;
                switch (_a) {
                    case 'members': return [3 /*break*/, 1];
                    case 'secrets': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, list_command_1.list.listMembers()];
            case 2:
                _b.sent();
                return [3 /*break*/, 6];
            case 3: return [4 /*yield*/, list_command_1.list.listSecrets()];
            case 4:
                _b.sent();
                return [3 /*break*/, 6];
            case 5:
                log(ui_service_1.MESSAGES.RESOURCE_INVALID(resource));
                return [3 /*break*/, 6];
            case 6:
                ;
                return [2 /*return*/];
        }
    });
}); });
program
    .command('update <resource>')
    .alias('u')
    .description('Update profile data <name/password>')
    .action(function (resource) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = resource;
                switch (_a) {
                    case 'password': return [3 /*break*/, 1];
                    case 'name': return [3 /*break*/, 3];
                }
                return [3 /*break*/, 5];
            case 1: return [4 /*yield*/, update_command_1.update.changePassword()];
            case 2:
                _b.sent();
                return [3 /*break*/, 6];
            case 3: return [4 /*yield*/, update_command_1.update.changeName()];
            case 4:
                _b.sent();
                return [3 /*break*/, 6];
            case 5:
                log(ui_service_1.MESSAGES.RESOURCE_INVALID(resource));
                return [3 /*break*/, 6];
            case 6:
                ;
                return [2 /*return*/];
        }
    });
}); });
program
    .command('create <resource>')
    .alias('c')
    .description('Create resources <secret>')
    .action(function (resource) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = resource;
                switch (_a) {
                    case 'secret': return [3 /*break*/, 1];
                }
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, create_command_1.create.createSecret()];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                log(ui_service_1.MESSAGES.RESOURCE_INVALID(resource));
                return [3 /*break*/, 4];
            case 4:
                ;
                return [2 /*return*/];
        }
    });
}); });
program
    .command('login')
    .description('Login service')
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, login_command_1.login.login()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
program
    .command('logout')
    .description('Logout service')
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, logout_command_1.logout.logout()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
program
    .command('configure')
    .description('Configure sphinx CLI')
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, configure_command_1.configure.conf()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
program
    .command('rotate')
    .alias('r')
    .description('Rotate your encryption keys')
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, rotate_command_1.rotate.rotateKey()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
if (!process.argv.slice(2).length /* || !/[arudl]/.test(process.argv.slice(2))*/) {
    program.outputHelp();
    process.exit();
}
program.parse(process.argv);
//dev scripts
// const httpClient = require('./lib/rest-client');
// import { rest } from './lib/rest-client.service';
// import { crypto } from './lib/crypto.service';
// import { userService } from './lib/user.service';
// // const rest = new RestService();
// // const crypto = new CryptoService()
// const test = async () => {
//     let url = 'http://localhost:3000/member';
//     let args = {
//         params: {
//             id: '442f0ebe-39b5-4698-91f5-28298b3d83c0'
//         }
//     }
//     let path = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
//     // console.log(await rest.httpGet(url, path));
//     url = 'http://localhost:3000/secret'
//     let data = {
//         secretName: "RDS jaskldPasswordasd prod",
// 	    secret: "ajsd8asn0d0annda;ksdlcabdsdabsudbas9d8bas89dbsdasoudaubsado8b",
//         receiver: "442f0ebe-39b5-4698-91f5-28298b3d83c0",
//         sender: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c",
//         createdBy: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c"
//     }
//     // console.log(await rest.httpPost(url, data));
//     url = 'http://localhost:3000/member';
//     let updateData = {
//         name: "Rohan Mehto",
//         publicKey: "updated"
//     }
//     let id = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
//     // console.log(await rest.httpPut(url, id, updateData))
//     console.log(await crypto.keyExists());
//     const publicKey = await crypto.generateKeyPair('Rohan Mehto', 'rohan@cai.fi')
//     const cipher = await crypto.encrypt('THis is my secret', publicKey)
//     console.log(cipher)
//     const plain = await crypto.decrypt(cipher, publicKey)
//     console.log(plain)
//     // const sign = await crypto.generateDetachedSignature();
//     // console.log(sign);
//     // console.log(await crypto.verifyDetachedSignature(sign.detachedSignature, sign.clearText, publicKey))
//     await userService.setUserConf('http://localhost:3000', '442f0ebe-39b5-4698-91f5-28298b3d83c0');
//     const users = await userService.listUsers();
//     console.log(users);
//     const us = await userService.getUserInfo();
//     console.log(us)
//     await userService.updateUser({name: 'Rohan Mehto', publicKey: 'asdnasjdnasijdkn'})
// }
// test()
