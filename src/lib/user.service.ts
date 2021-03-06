import { rest } from './rest-client.service';
import { config } from './conf.service';
import { crypto } from './crypto.service';

class UserService {

    async listUsers(): Promise<any> {
        let users = await rest.httpGet('/member');
        return users.members;
    }

    async updateUser(data: object): Promise<boolean> {
        // const user = await this.getUserInfo();
        const email = config.getEmail();
        await rest.httpPut('/member', email, data);
        return true
    }

    async getUserInfo(): Promise<any> {
        const email = config.getEmail();
        const user = await rest.httpGet('/member', email);
        return user.member;
    }

    async setUserConf(baseApi: string, email: string = ''): Promise<boolean> {
        config.setBaseApi(baseApi);
        config.setEmail(email);
        return true;
    }

    async setUpKeys(): Promise<void> {
        const user = await this.getUserInfo();
        const publicKey = await crypto.generateKeyPair(user.name, user.email);
        await rest.httpPut('/member', user.email, { publicKey });
    }

    async cleanUpKeys(): Promise<void> {
        const user = await this.getUserInfo();
        await crypto.deleteKeyPair();
        await rest.httpPut('/member', user.email, { publicKey: null });
    }

    async getPublicKeyByEmail(email: string): Promise<string> {
        const user = await rest.httpGet('/member', email);
        return user.member.publicKey;
    }

    // async prepareUserMap() {
    //     const users = await this.listUsers();
    //     for (let user of users) {
            
    //     }
    // }
}

export const userService = new UserService();