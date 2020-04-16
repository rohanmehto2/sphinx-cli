import { userService } from './user.service';
import { rest } from './rest-client.service';
import { crypto } from './crypto.service';

class SecretService {

    async getAllSecrets(): Promise<any> {
        const user = await userService.getUserInfo();
        const secrets = user.receivedSecrets;
        for (let secret of secrets) {
            secret.ttl = await this.calculateTimeLeft(secret.createdAt, secret.ttl);
        }
        return secrets;
    }

    async createSecret(secretObj: any): Promise<object> {
        const publicKey = await userService.getPublicKeyByEmail(secretObj.recipientEmail);
        const cipher = await crypto.encrypt(secretObj.secret, publicKey);
        secretObj.secret = cipher;
        const secret = await rest.httpPost('/secret', secretObj);
        return secret;
    }

    async readSecret(secret: object): Promise<boolean> {
        
        return true;
    }

    async calculateTimeLeft(createdAt: string, ttl: number): Promise<number> {
        const currentTime = Date.now();
        const diff = currentTime - Date.parse(createdAt);
        let diffDate = new Date(diff);
        const age = diffDate.getUTCHours();
        return (24*ttl - age);
    }

}

export const secretService = new SecretService();