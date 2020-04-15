import { inquirerService } from '../lib/inquirer.service';
import { config } from '../lib/conf.service';
const chalk = require('chalk');
const log = console.log;

class Configure {

    async conf() {
        const conf = await inquirerService.askConfig();
        config.setBaseApi(conf.sphinxServer);
        config.setEmail(conf.email);
        log(conf);
        log(chalk.green('Configuration done'));
    }
}

export const configure = new Configure();