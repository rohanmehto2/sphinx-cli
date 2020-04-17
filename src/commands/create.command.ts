import { inquirerService } from "../lib/inquirer.service";
import { secretService } from "../lib/secret.service";
import { MESSAGES, Spinner } from "../lib/ui.service";
import { authService } from "../lib/auth.service";
import { config } from "../lib/conf.service";

const log = console.log;
var spinner = Spinner();

class Create {

    async createSecret() {
        if (!(await config.isConfigured())) return
        if (!(await authService.isLoggedIn())) return
        const secret = await inquirerService.askSecret();
        spinner.start(MESSAGES.CREATE_SECRET_WAIT);
        await secretService.createSecret(secret);
        spinner.stop();
        log(MESSAGES.SECRET_SUCCESS);
    }

}

export const create = new Create();