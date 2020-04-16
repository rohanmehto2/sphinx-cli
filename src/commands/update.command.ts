import { inquirerService } from "../lib/inquirer.service";
import { rest } from "../lib/rest-client.service";
import { config } from "../lib/conf.service";
import { userService } from "../lib/user.service";
import { MESSAGES } from "../lib/ui.service";

const chalk = require('chalk');
const log = console.log;

class Update {

    async changePassword(): Promise<void> {
        // TODO
        const pwd = await inquirerService.askPassword();
        // verify current password
        const newPassword = await inquirerService.askNewPassword();
        if ( newPassword.password !== newPassword.confirmPassword) {
            log(MESSAGES.PWD_MATCH_ERR);
            return;
        }
        await userService.updateUser({ password: newPassword.password });
        log(MESSAGES.PWD_CHANGE_SUCCESS);
    }

    async changeName(): Promise<void> {
        const name = await inquirerService.askName();
        const user = await rest.httpPut('/member', config.getEmail(), { name});
        log(MESSAGES.NAME_CHANGE_SUCCESS);
    }
}

export const update = new Update();