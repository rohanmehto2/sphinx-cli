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
                message: MESSAGES.ASK_PWD,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.INVALID_INPUT;
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

    async askPassword(): Promise<any> {
        const questions = [
            {
                name: 'password',
                type: 'password',
                message: MESSAGES.ASK_PWD,
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

    async askNewPassword(): Promise<any> {
        const questions = [
            {
                name: 'password',
                type: 'password',
                message: MESSAGES.ASK_NEW_PWD,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.INVALID_INPUT;
                    }
                }
            },
            {
                name: 'confirmPassword',
                type: 'password',
                message: MESSAGES.ASK_CONFIRM_PWD,
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
    
    async askSecret(): Promise<any> {
        const questions = [
            {
                name: 'recipientEmail',
                type: 'input', 
                message: MESSAGES.ASK_RECIPIENT,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.ASK_EMAIL_ERR;
                    }
                }
            },
            {
                name: 'secretName',
                type: 'input',
                message: MESSAGES.ASK_SECRET_NAME,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.INVALID_INPUT;
                    }
                }
            },
            {
                name: 'secret',
                type: 'password',
                message: MESSAGES.ASK_SECRET,
                mask: true,
                validate: (value: string) => {
                    if (value.length) {
                        return true;
                    } else {
                        return MESSAGES.INVALID_INPUT;
                    }
                }
            },
            {
                name: 'description',
                type: 'input',
                message: MESSAGES.ASK_DESC,
                default: ''
            },
            {
                name: 'ttl',
                type: 'number',
                message: MESSAGES.ASK_TTL,
                default: 3
            }
        ];
        return inquirer.prompt(questions);
    }

    askSelectSecret(secrets: Array<any>): Promise<any> {
        let choices = [];
        for (const idx in secrets) {
            choices.push({
                name: MESSAGES.SECRET_CHOICE(secrets[idx]),
                value: idx,
            });
        }
        const questions = [
            {
                name: 'secret',
                type: 'list',
                message: MESSAGES.ASK_SELECT_SECRET,
                choices
            }
        ];
        return inquirer.prompt(questions);
    }
}

export const inquirerService = new InquirerService();