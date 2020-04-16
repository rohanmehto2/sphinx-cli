import { userService } from '../lib/user.service';
import { EMOJIS, MESSAGES, Spinner } from '../lib/ui.service';
import { secretService } from '../lib/secret.service';
// TODO: replace with cli-table3
import { Table } from 'console-table-printer';

var spinner = Spinner();

class List {

    async dummy() {
        for (let i=0; i<1000000000; i++) {
            continue;
        }
    }

    async listMembers() {
        spinner.start(MESSAGES.LIST_MEM_WAIT);
        await this.dummy();
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
        spinner.stop();
        p.printTable();
    }

    async listSecrets() {
        spinner.start(MESSAGES.LIST_SECRET_WAIT);
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
        spinner.end();
        p.printTable();
    }
}

export const list = new List();