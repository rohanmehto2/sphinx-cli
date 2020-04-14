const chalk = require('chalk');
const log = console.log;

class Logout {

    async logout() {
        // TODO
        log(chalk.green('Logged out successfully'));
    }
}

export const logout = new Logout();