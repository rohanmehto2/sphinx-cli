import { userService } from '../lib/user.service';
import { EMOJIS } from '../lib/ui.service';
import { secretService } from '../lib/secret.service';
import { Table } from 'console-table-printer';
// const chalk = require('chalk');
// const log = console.log;

class List {

    async listMembers() {
        const users = await userService.listUsers();
        const p = new Table({
            columns: [
                { name: 'Name', alignment: 'left' },
                { name: 'Email', alignment: 'left', color: 'white_bold' }
            ]
        });
        for (let user of users) {
            p.addRow({
                Name: `${EMOJIS.PERSON}${user.name}`,
                Email: `${EMOJIS.EMAIL}  <${user.email}>`
            });
        }
        p.printTable();
    }

    async listSecrets() {
        const secrets = await secretService.getAllSecrets();
        const p = new Table({
            columns: [
                { name: 'Secret', alignment: 'left', color: 'cyan' },
                { name: 'Creator', alignment: 'left', color: 'white_bold' },
                { name: 'Description', alignment: 'left' }
            ]
        });
        for (let secret of secrets) {
            p.addRow({
                Secret: `${EMOJIS.LOCK}${secret.secretName}`,
                Creator: `${EMOJIS.EMAIL}  <${secret.creatorEmail}>`,
                Description: `${EMOJIS.PAGE}  <${secret.description}>`
            });
        }
        p.printTable();
    }
}

export const list = new List();