import { authService } from '../lib/auth.service';
import { MESSAGES } from '../lib/ui.service';
const chalk = require('chalk');
const log = console.log;

class Logout {

    async logout() {
        // isLoggedIn
        await authService.logout();
        log(MESSAGES.LOGOUT_SUCCESS);
    }
}

export const logout = new Logout();