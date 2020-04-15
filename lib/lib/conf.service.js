"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configstore = require('configstore');
var pkg = require('../../package.json');
var conf = new Configstore(pkg.name);
var ConfService = /** @class */ (function () {
    function ConfService() {
    }
    ConfService.prototype.getEmail = function () {
        return conf.get('sphinx.email');
    };
    ConfService.prototype.getBaseApi = function () {
        return conf.get('sphinx.baseApi');
    };
    ConfService.prototype.setEmail = function (email) {
        conf.set('sphinx.email', email);
    };
    ConfService.prototype.setBaseApi = function (api) {
        conf.set('sphinx.baseApi', api);
    };
    return ConfService;
}());
exports.ConfService = ConfService;
exports.config = new ConfService();
