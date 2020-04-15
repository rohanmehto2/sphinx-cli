import { inquirerService } from './../lib/inquirer.service';
const chalk = require('chalk');
const log = console.log;

class Login {

    async login() {
        const credentials = await inquirerService.askCredentials();
        log(credentials);
        log(chalk.green('Loggen in successfully'));
    }
}

export const login = new Login();