import { userService } from "../lib/user.service";
import { MESSAGES } from "../lib/ui.service";
import { inquirerService } from "../lib/inquirer.service";

const chalk = require('chalk');
const log = console.log;

class Rotate {

    async rotateKey(): Promise<void> {
        log(MESSAGES.KEY_ROTATION_WARNING)
        const rotate = await inquirerService.askKeyRotationConfirmation();
        if (!rotate) {
            log(MESSAGES.KEY_ROTATION_ABORT)
            return
        }
        await userService.setUpKeys();
        log(MESSAGES.KEY_ROTATION_SUCCESS);
    }
}

export const rotate = new Rotate();