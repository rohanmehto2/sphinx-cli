import { inquirerService } from "../lib/inquirer.service";
import { rest } from "../lib/rest-client.service";
import { config } from "../lib/conf.service";
import { userService } from "../lib/user.service";
import { MESSAGES } from "../lib/ui.service";
import { authService } from "../lib/auth.service";
import { isLoggedIn } from '../decorators/login.decorator'; 
import { isConfigured } from '../decorators/config.decorator';

const chalk = require('chalk');
const log = console.log;

class Update {

    @isConfigured
    @isLoggedIn
    async changePassword(): Promise<void> {
        
        const pwd = await inquirerService.askPassword();
        const correct = await authService.verifyPassword(pwd.password);
        if (!correct) {
            log(MESSAGES.INCORRECT_PASSWORD);
            return;
        }
        const newPassword = await inquirerService.askNewPassword();
        if ( newPassword.password !== newPassword.confirmPassword) {
            log(MESSAGES.PWD_MATCH_ERR);
            return;
        }
        await userService.updateUser({ password: newPassword.password });
        log(MESSAGES.PWD_CHANGE_SUCCESS);
    }

    @isConfigured
    @isLoggedIn
    async changeName(): Promise<void> {
        const name = await inquirerService.askName();
        const user = await rest.httpPut('/member', config.getEmail(), { name: name.name });
        log(MESSAGES.NAME_CHANGE_SUCCESS);
    }
}

export const update = new Update();