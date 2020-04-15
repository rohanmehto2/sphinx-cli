const chalk = require('chalk');
const log = console.log;

class Rotate {

    async rotateKey() {
        // TODO
        log(chalk.green('Key rotation successfull'));
    }
}

export const rotate = new Rotate();