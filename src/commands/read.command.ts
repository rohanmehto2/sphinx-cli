import { inquirerService } from "../lib/inquirer.service";
import { config } from "../lib/conf.service";
import { secretService } from "../lib/secret.service";
import { MESSAGES, Spinner } from "../lib/ui.service";
import { crypto } from "../lib/crypto.service";
import { userService } from "../lib/user.service";
import { authService } from "../lib/auth.service";
// import copy from 'copy-to-clipboard';

const log = console.log;
var spinner = Spinner();

class Read {

    async readSecret() {
        // TODO: move logic to secret service
        if (!(await config.isConfigured())) return
        if (!(await authService.isLoggedIn())) return
        const secrets = await secretService.getAllSecrets();
        const id = await inquirerService.askSelectSecret(secrets);
        spinner.start(MESSAGES.READ_SECRET_WAIT);
        const secret = secrets[parseInt(id.secret)];
        const publicKey = await userService.getPublicKeyByEmail(config.getEmail());
        const plaintext = await crypto.decrypt(secret.secret, publicKey);
        // copy(plaintext);
        spinner.stop();
        log(plaintext);
        log(MESSAGES.READ_SECRET_SUCCESS);
    }

}

export const read = new Read();