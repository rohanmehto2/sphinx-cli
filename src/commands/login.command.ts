import { inquirerService } from './../lib/inquirer.service';
import { authService } from '../lib/auth.service';
import { MESSAGES } from '../lib/ui.service';
import { config } from '../lib/conf.service';

const log = console.log;

class Login {

    async login(): Promise<void> {
        if (!(await config.isConfigured())) return
        const credentials = await inquirerService.askCredentials();
        const success = await authService.login(credentials);
        if (!success) {
            log(MESSAGES.LOGIN_FAIL);
            return
        }
        config.setEmail(credentials.email);
        log(MESSAGES.LOGIN_SUCCESS);
    }
}

export const login = new Login();