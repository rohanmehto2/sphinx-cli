import { authService } from '../lib/auth.service';
import { MESSAGES } from '../lib/ui.service';
import { isLoggedIn } from '../decorators/login.decorator'; 
import { isConfigured } from '../decorators/config.decorator';

const log = console.log;

class Logout {

    @isConfigured
    @isLoggedIn
    async logout() {
        await authService.logout();
        log(MESSAGES.LOGOUT_SUCCESS);
    }
}

export const logout = new Logout();