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

    getJwtPublicKey(): string {
        return conf.get('sphinx.jwtPublicKey');
    }

    setEmail(email: string): void {
        conf.set('sphinx.email', email);
    }

    setBaseApi(api: string): void {
        conf.set('sphinx.baseApi', api);
    }

    setJwtPublicKey(jwtPk: string): void {
        conf.set('sphinx.jwtPublicKey', jwtPk);
    }

    async isConfigured(): Promise<boolean> {
        if (this.getBaseApi() == null) {
            return false;
        }
        return true;
    }
}

export const config = new ConfService();