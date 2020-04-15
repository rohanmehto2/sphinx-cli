import { inquirerService } from "../lib/inquirer.service";
import { rest } from "../lib/rest-client.service";
import { config } from "../lib/conf.service";

const chalk = require('chalk');
const log = console.log;

class Update {

    async changePassword() {
        // TODO
        log(chalk.green('Password changed successfully'));
    }

    async changeName() {
        const name = inquirerService.askName();
        const user = rest.httpPut('/member', config.getEmail(), { name});
        log(chalk.green('Name changed successfully'));
    }
}

export const update = new Update();