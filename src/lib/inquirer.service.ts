import { EMOJIS, MESSAGES } from './ui.service';
import inquirer from 'inquirer';


class InquirerService {

    async askCredentials(): Promise<any> {
        const questions = [
            {
                name: 'email',
                type: 'input',
                message: MESSAGES.ASK_EMAIL,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.ASK_EMAIL_ERR;
                    }
                }
            },
            {
                name: 'password',
                type: 'password',
                mask: true,
                message: MESSAGES.ASK_PWD,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.ASK_PWD_ERR;
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    }

    async askConfig(): Promise<any> {
        const questions = [
            {
                name: 'sphinxServer',
                type: 'input',
                message: MESSAGES.ASK_SERVER_ADDRS,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.ASK_SERVER_ADDRS_ERR;
                    }
                }
            },
            {
                name: 'email',
                type: 'input',
                message: MESSAGES.ASK_EMAIL,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.ASK_EMAIL_ERR;
                    }
                }
            }
        ];
        return inquirer.prompt(questions);
    }

    async askName(): Promise<any> {
        const questions = [
            {
                name: 'name',
                type: 'input',
                message: MESSAGES.ASK_NAME,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.INVALID_INPUT;
                    }
                }
            },
        ];
        return inquirer.prompt(questions);
    }

    askKeyRotationConfirmation(): Promise<any> {
        const questions = [
            {
                name: 'rotateKey',
                type: 'confirm',
                message: MESSAGES.ASK_SURE,
                default: false,
            }
        ];
        return inquirer.prompt(questions);
    }
}

export const inquirerService = new InquirerService();