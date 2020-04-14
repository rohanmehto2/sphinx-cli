declare class SecretService {
    listSecrets(): Promise<any>;
    createSecret(secretObj: object): Promise<object>;
    readSecret(secret: object): Promise<boolean>;
}
export declare const secretService: SecretService;
export {};
