import { inquirerService } from '../lib/inquirer.service';
const chalk = require('chalk');
const log = console.log;

class Configure {

    async conf() {
        const conf = await inquirerService.askConfig();
        log(conf);
        log(chalk.green('Configuration done'));
    }
}

export const configure = new Configure();