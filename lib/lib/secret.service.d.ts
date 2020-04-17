declare class SecretService {
    getAllSecrets(): Promise<any>;
    createSecret(secretObj: any): Promise<object>;
    readSecret(secret: object): Promise<boolean>;
    calculateTimeLeft(createdAt: string, ttl: number): Promise<number>;
}
export declare const secretService: SecretService;
export {};
