declare class SecretService {
    getAllSecrets(): Promise<any>;
    createSecret(secretObj: any): Promise<object>;
    readSecret(secret: object): Promise<boolean>;
}
export declare const secretService: SecretService;
export {};
