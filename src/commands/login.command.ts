import { inquirerService } from './../lib/inquirer.service';
import { authService } from '../lib/auth.service';
import { MESSAGES } from '../lib/ui.service';
import { config } from '../lib/conf.service';
const chalk = require('chalk');
const log = console.log;

class Login {

    async login() {
        if (!(await config.isConfigured())) return
        const credentials = await inquirerService.askCredentials();
        await authService.login(credentials);
        config.setEmail(credentials.email);
        log(MESSAGES.LOGIN_SUCCESS);
    }
}

export const login = new Login();