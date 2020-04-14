declare class CryptoService {
    private readonly keytarAccount;
    encrypt(plaintext: string, publicKeyArmored: string): Promise<string>;
    decrypt(ciphertext: string, publicKeyArmored: string): Promise<string>;
    generateKeyPair(name: string, email: string): Promise<string>;
    keyExists(): Promise<boolean>;
}
export declare const crypto: CryptoService;
export {};
