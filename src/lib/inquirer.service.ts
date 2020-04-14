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
                message: 'Please enter the complete address of the server:',
            },
            {
                name: 'email',
                type: 'input',
                message: 'Enter your reistered email:'
            }
        ];
        return inquirer.prompt(questions);
    }
}

export const inquirerService = new InquirerService();