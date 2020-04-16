import { inquirerService } from "../lib/inquirer.service";
import { secretService } from "../lib/secret.service";
import { MESSAGES, Spinner } from "../lib/ui.service";

const log = console.log;
var spinner = Spinner();

class Create {

    async createSecret() {
        spinner.start(MESSAGES.CREATE_SECRET_WAIT);
        const secret = await inquirerService.askSecret();
        await secretService.createSecret(secret);
        spinner.stop();
        log(MESSAGES.SECRET_SUCCESS);
    }

}

export const create = new Create();