import { inquirerService } from "../lib/inquirer.service";
import { secretService } from "../lib/secret.service";
import { MESSAGES, Spinner } from "../lib/ui.service";
import { isLoggedIn } from '../decorators/login.decorator'; 
import { isConfigured } from '../decorators/config.decorator';

const log = console.log;
var spinner = Spinner();

class Create {

    @isConfigured
    @isLoggedIn
    async createSecret() {
        const secret = await inquirerService.askSecret();
        spinner.start(MESSAGES.CREATE_SECRET_WAIT);
        await secretService.createSecret(secret);
        spinner.stop();
        log(MESSAGES.SECRET_SUCCESS);
    }

}

export const create = new Create();