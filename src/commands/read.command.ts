import { inquirerService } from "../lib/inquirer.service";
import { rest } from "../lib/rest-client.service";
import { config } from "../lib/conf.service";
import { secretService } from "../lib/secret.service";
import { MESSAGES } from "../lib/ui.service";
import { crypto } from "../lib/crypto.service";
import { userService } from "../lib/user.service";
import copy from 'copy-to-clipboard';

const chalk = require('chalk');
const log = console.log;

class Read {

    async readSecret() {
        const secrets = await secretService.getAllSecrets();
        const id = await inquirerService.askSelectSecret(secrets);
        const secret = secrets[parseInt(id.secret)];
        const publicKey = await userService.getPublicKeyByEmail(config.getEmail());
        const plaintext = await crypto.decrypt(secret.secret, publicKey);
        copy(plaintext);
        log(MESSAGES.READ_SECRET_SUCCESS);
    }

}

export const read = new Read();