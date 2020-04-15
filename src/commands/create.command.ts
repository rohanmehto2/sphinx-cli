import { inquirerService } from "../lib/inquirer.service";
import { rest } from "../lib/rest-client.service";
import { config } from "../lib/conf.service";
import { secretService } from "../lib/secret.service";
import { MESSAGES } from "../lib/ui.service";

const chalk = require('chalk');
const log = console.log;

class Create {

    async createSecret() {
        const secret = await inquirerService.askSecret();
        await secretService.createSecret(secret);
        log(MESSAGES.SECRET_SUCCESS);
    }

}

export const create = new Create();