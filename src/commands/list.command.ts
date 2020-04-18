import { userService } from '../lib/user.service';
import { EMOJIS, MESSAGES, Spinner } from '../lib/ui.service';
import { secretService } from '../lib/secret.service';
// TODO: replace with cli-table3
import { Table } from 'console-table-printer';
import { isLoggedIn } from '../decorators/login.decorator'; 
import { isConfigured } from '../decorators/config.decorator';

var spinner = Spinner();

class List {

    @isConfigured
    @isLoggedIn
    async listMembers() {
        spinner.start(MESSAGES.LIST_MEM_WAIT);
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

    @isConfigured
    @isLoggedIn
    async listSecrets() {
        spinner.start(MESSAGES.LIST_SECRET_WAIT);
        const secrets = await secretService.getAllSecrets();
        const p = new Table({
            columns: [
                { name: 'Secret', alignment: 'left', color: 'cyan' },
                { name: 'Creator', alignment: 'left', color: 'white_bold' },
                { name: 'TTL', alignment: 'left', color: 'white_bold' },
                { name: 'Description', alignment: 'left' }
            ]
        });
        for (let secret of secrets) {
            p.addRow({
                Secret: `${EMOJIS.LOCK}${secret.secretName}`,
                Creator: `${EMOJIS.EMAIL}  <${secret.creatorEmail}>`,
                TTL: `${EMOJIS.HOURGLASS}  ${secret.ttl}h`,
                Description: `${EMOJIS.PAGE}  ${secret.description}`
            });
        }
        spinner.stop();
        p.printTable();
    }
}

export const list = new List();