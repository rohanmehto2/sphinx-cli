#!/usr/bin/env node

const clear = require('clear');
const program = require('commander');
const log = console.log;

import { list } from './commands/list.command';
import { login } from './commands/login.command';
import { logout } from './commands/logout.command';
import { configure } from './commands/configure.command';

import { MESSAGES } from './lib/ui.service';
import { rotate } from './commands/rotate.command';
import { update } from './commands/update.command';
import { create } from './commands/create.command';
import { read } from './commands/read.command';

// clear();

program
	.version('0.0.1')
	.description('Sphinx CLI tool to share secrets');

program
	.command('list <resource>')
	.alias('ls')
	.description('List members or secrets')
	.action(async (resource: string) => {
		switch (resource) {
			case 'members':
				await list.listMembers();
				break;
			case 'secrets':
				await list.listSecrets();
				break;
			default:
				log(MESSAGES.RESOURCE_INVALID(resource));
				break;
		};
	});

program
	.command('update <resource>')
	.alias('u')
	.description('Update profile data <name/password>')
	.action(async (resource: string) => {
		switch (resource) {
			case 'password':
				await update.changePassword();
				break;
			case 'name':
				await update.changeName();
				break;
			default:
				log(MESSAGES.RESOURCE_INVALID(resource));
				break;
		};
	});

program
	.command('create <resource>')
	.alias('c')
	.description('Create resources <secret>')
	.action(async (resource: string) => {
		switch (resource) {
			case 'secret':
				await create.createSecret();
				break;
			default:
				log(MESSAGES.RESOURCE_INVALID(resource));
				break;
		};
	});

program
	.command('read <resource>')
	.alias('r')
	.description('Read resources <secret>')
	.action(async (resource: string) => {
		switch (resource) {
			case 'secret':
				await read.readSecret();
				break;
			default:
				log(MESSAGES.RESOURCE_INVALID(resource));
				break;
		};
	});

program
	.command('login')
	.description('Login service')
	.action(async () => {
		await login.login();
	});

program
	.command('logout')
	.description('Logout service')
	.action(async () => {
		await logout.logout();
	});

program
	.command('configure')
	.description('Configure sphinx CLI')
	.action(async () => {
		log(MESSAGES.WELCOME);
		await configure.conf();
	});

program
	.command('rotate')
	.alias('r')
	.description('Rotate your encryption keys')
	.action(async () => {
		await rotate.rotateKey();
	});

if (!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
	program.outputHelp()
	process.exit()
}

program.parse(process.argv);

//dev scripts

// const httpClient = require('./lib/rest-client');

// import { rest } from './lib/rest-client.service';
// import { crypto } from './lib/crypto.service';
// import { userService } from './lib/user.service';

// // const rest = new RestService();
// // const crypto = new CryptoService()

// const test = async () => {
//     let url = 'http://localhost:3000/member';
//     let args = {
//         params: {
//             id: '442f0ebe-39b5-4698-91f5-28298b3d83c0'
//         }
//     }
//     let path = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
//     // console.log(await rest.httpGet(url, path));

//     url = 'http://localhost:3000/secret'
//     let data = {
//         secretName: "RDS jaskldPasswordasd prod",
// 	    secret: "ajsd8asn0d0annda;ksdlcabdsdabsudbas9d8bas89dbsdasoudaubsado8b",
//         receiver: "442f0ebe-39b5-4698-91f5-28298b3d83c0",
//         sender: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c",
//         createdBy: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c"
//     }
//     // console.log(await rest.httpPost(url, data));

//     url = 'http://localhost:3000/member';
//     let updateData = {
//         name: "Rohan Mehto",
//         publicKey: "updated"
//     }
//     let id = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
//     // console.log(await rest.httpPut(url, id, updateData))

//     console.log(await crypto.keyExists());
//     const publicKey = await crypto.generateKeyPair('Rohan Mehto', 'rohan@cai.fi')
//     const cipher = await crypto.encrypt('THis is my secret', publicKey)
//     console.log(cipher)
//     const plain = await crypto.decrypt(cipher, publicKey)
//     console.log(plain)
//     // const sign = await crypto.generateDetachedSignature();
//     // console.log(sign);
//     // console.log(await crypto.verifyDetachedSignature(sign.detachedSignature, sign.clearText, publicKey))

//     await userService.setUserConf('http://localhost:3000', '442f0ebe-39b5-4698-91f5-28298b3d83c0');
//     const users = await userService.listUsers();
//     console.log(users);
//     const us = await userService.getUserInfo();
//     console.log(us)
//     await userService.updateUser({name: 'Rohan Mehto', publicKey: 'asdnasjdnasijdkn'})

// }

// test()


