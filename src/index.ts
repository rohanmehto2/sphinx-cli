#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(
  chalk.red(
    figlet.textSync('sphinx-cli', { horizontalLayout: 'full' })
  )
);

// program
//   .version('0.0.1')
//   .description("An example CLI for ordering pizza's")
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq', 'Add bbq sauce')
//   .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
//   .option('-C, --no-cheese', 'You do not want any cheese')
//   .parse(process.argv);

//   if (!process.argv.slice(2).length) {
//     program.outputHelp();
//   }
  
//dev scripts

const httpClient = require('./lib/rest-client');

import { rest } from './lib/rest-client';
import { crypto } from './lib/crypto' 

// const rest = new RestService();
// const crypto = new CryptoService()

const test = async () => {
    let url = 'http://localhost:3000/member';
    let args = {
        params: {
            id: '442f0ebe-39b5-4698-91f5-28298b3d83c0'
        }
    }
    let path = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
    // console.log(await rest.httpGet(url, path));

    url = 'http://localhost:3000/secret'
    let data = {
        secretName: "RDS jaskldPasswordasd prod",
	    secret: "ajsd8asn0d0annda;ksdlcabdsdabsudbas9d8bas89dbsdasoudaubsado8b",
        receiver: "442f0ebe-39b5-4698-91f5-28298b3d83c0",
        sender: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c",
        createdBy: "4686f72d-e1a8-4b1b-8bc6-857fffa93a9c"
    }
    // console.log(await rest.httpPost(url, data));

    url = 'http://localhost:3000/member';
    let updateData = {
        name: "Rohan Mehto",
        publicKey: "updated"
    }
    let id = '442f0ebe-39b5-4698-91f5-28298b3d83c0';
    // console.log(await rest.httpPut(url, id, updateData))

    console.log(await crypto.keyExists());
    const publicKey = await crypto.generateKeyPair('Rohan Mehto', 'rohan@cai.fi')
    const cipher = await crypto.encrypt('THis is my secret', publicKey)
    console.log(cipher)
    const plain = await crypto.decrypt(cipher, publicKey)
    console.log(plain)
    // const sign = await crypto.generateDetachedSignature();
    // console.log(sign);
    // console.log(await crypto.verifyDetachedSignature(sign.detachedSignature, sign.clearText, publicKey))

}

test()


