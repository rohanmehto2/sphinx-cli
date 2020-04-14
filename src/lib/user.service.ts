const Configstore = require('configstore');
const pkg = require('../../package.json');

import { rest } from './rest-client.service';
const conf = new Configstore(pkg.name);

class UserService {

    async listUsers(): Promise<any> {
        let users = await rest.httpGet('/member');
        return users.members;
    }

    async updateUser(data: object): Promise<boolean> {
        const user = await this.getUserInfo();
        await rest.httpPut('/member', user.id, data);
        return true
    }

    async getUserInfo(): Promise<any> {
        const email = conf.get('sphinx.email');
        const user = await rest.httpGet('/member', email);
        return user.member;
    }

    async setUserConf(baseApi: string, email: string = ''): Promise<boolean> {
        conf.set('sphinx.baseApi', baseApi);
        conf.set('sphinx.email', email);
        return true;
    }

    // async prepareUserMap() {
    //     const users = await this.listUsers();
    //     for (let user of users) {
            
    //     }
    // }
}

export const userService = new UserService();