import { userService } from './user.service';
import { rest } from './rest-client.service';

class SecretService {
    async listSecrets(): Promise<any> {
        const user = await userService.getUserInfo();
        return user.receivedSecrets;
    }

    async createSecret(secretObj: object): Promise<object> {
        const secret = await rest.httpPost('/secret', secretObj);
        return secret;
    }

    async readSecret(secret: object): Promise<boolean> {
        
        return true;
    }
}

export const secretService = new SecretService();