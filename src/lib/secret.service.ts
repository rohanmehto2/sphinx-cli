import { userService } from './user.service';
import { rest } from './rest-client.service';
import { crypto } from './crypto.service';

class SecretService {
    async getAllSecrets(): Promise<any> {
        const user = await userService.getUserInfo();
        return user.receivedSecrets;
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


}

export const secretService = new SecretService();