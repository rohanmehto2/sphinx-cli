const keytar = require('keytar');
const os = require('os');
const openpgp = require('openpgp');
const password = require('secure-random-password');


class CryptoService {
    private readonly keytarAccount = os.userInfo().username;
    // TODO: find a good design pattern to instantiate these variables
    // private readonly sphinxKey = null;
    // private readonly sphinxPassphrase = null;
    
    async encrypt(plaintext: string, publicKeyArmored: string): Promise<string> {
        const { data: encrypted } = await openpgp.encrypt({
            message: openpgp.message.fromText(plaintext),
            publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys,
            // TODO: add signing with private key
            // privateKeys: [privateKey]
        });
        return encrypted;
    }

    async decrypt(ciphertext: string, publicKeyArmored: string): Promise<string> {
        const privateKeyArmored = await keytar.getPassword('sphinxKey', this.keytarAccount);
        const passphrase = await keytar.getPassword('sphinxPassphrase', this.keytarAccount);
        const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
        await privateKey.decrypt(passphrase);

        const { data: decrypted } = await openpgp.decrypt({
            message: await openpgp.message.readArmored(ciphertext),
            // TODO: verify signature
            publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys,
            privateKeys: [privateKey]
        });
        return decrypted;
    }

    async generateKeyPair(name: string, email: string): Promise<string> {
        const passphrase = password.randomString({length: 512});
        const { privateKeyArmored, publicKeyArmored } = await openpgp.generateKey({
            userIds: [{name, email}],
            curve: 'ed25519',
            passphrase: passphrase
        });
        await keytar.setPassword('sphinxKey', this.keytarAccount, privateKeyArmored);
        await keytar.setPassword('sphinxPassphrase', this.keytarAccount, passphrase);
        return publicKeyArmored;
    }

    // async generateDetachedSignature(): Promise<object> {
    //     const privateKeyArmored = await keytar.getPassword('sphinxKey', this.keytarAccount);
    //     const passphrase = await keytar.getPassword('sphinxPassphrase', this.keytarAccount);
    //     const { keys: [privateKey] } = await openpgp.key.readArmored(privateKeyArmored);
    //     await privateKey.decrypt(passphrase);

    //     const clearText = password.randomPassword();
    //     const { signature: detachedSignature } = await openpgp.sign({
    //         message: openpgp.cleartext.fromText(clearText),
    //         privateKeys: [privateKey],
    //         detached: true
    //     });
    //     return {
    //         clearText,
    //         detachedSignature
    //     }
    // }

    // async verifyDetachedSignature(sign: string, clearText: string, publicKeyArmored: string): Promise<boolean> {
    //     const verified = await openpgp.verify({
    //         message: openpgp.cleartext.fromText(clearText),
    //         signature: await openpgp.signature.readArmored(sign),
    //         publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys
    //     });
    //     const { valid } = verified.signatures[0];
    //     if (valid)
    //         return true;
    //     return false;
    // }

    async deleteKeyPair(): Promise<void> {
        await keytar.deletePassword('sphinxKey', this.keytarAccount);
        await keytar.deletePassword('sphinxPassphrase', this.keytarAccount);
    }

    async keyExists(): Promise<boolean> {
        const key = await keytar.getPassword('sphinxKey', this.keytarAccount);
        if (key != null)
            return true;
        return false;
    }
}

export const crypto = new CryptoService();