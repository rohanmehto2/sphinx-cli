import { authService } from '../lib/auth.service';
import { MESSAGES } from '../lib/ui.service';
import { config } from '../lib/conf.service';
const chalk = require('chalk');
const log = console.log;

class Logout {

    async logout() {
        if (!(await config.isConfigured())) return
        if (!(await authService.isLoggedIn())) return
        await authService.logout();
        log(MESSAGES.LOGOUT_SUCCESS);
    }
}

export const logout = new Logout();