import { userService } from "../lib/user.service";
import { MESSAGES, Spinner } from "../lib/ui.service";
import { inquirerService } from "../lib/inquirer.service";
import { authService } from "../lib/auth.service";

const log = console.log;
var spinner = Spinner();

class Rotate {

    async rotateKey(): Promise<void> {
        if (!(await authService.isLoggedIn())) return
        log(MESSAGES.KEY_ROTATION_WARNING)
        const rotate = await inquirerService.askKeyRotationConfirmation();
        if (!rotate) {
            log(MESSAGES.KEY_ROTATION_ABORT)
            return
        }
        spinner.start(MESSAGES.KEY_ROTATION_WAIT);
        await userService.setUpKeys();
        spinner.stop();
        log(MESSAGES.KEY_ROTATION_SUCCESS);
    }
}

export const rotate = new Rotate();