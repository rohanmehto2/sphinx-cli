const Configstore = require('configstore');
const pkg = require('../../package.json');

const conf = new Configstore(pkg.name);

export class ConfService {
    constructor() {}

    getEmail(): string {
        return conf.get('sphinx.email');
    }

    getBaseApi(): string {
        return conf.get('sphinx.baseApi');
    }

    setEmail(email: string) {
        conf.set('sphinx.email', email);
    }

    setBaseApi(api: string) {
        conf.set('sphinx.baseApi', api);
    }
}

export const config = new ConfService();