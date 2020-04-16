declare class InquirerService {
    askCredentials(): Promise<any>;
    askConfig(): Promise<any>;
    askName(): Promise<any>;
    askPassword(): Promise<any>;
    askNewPassword(): Promise<any>;
    askKeyRotationConfirmation(): Promise<any>;
    askSecret(): Promise<any>;
    askSelectSecret(secrets: Array<any>): Promise<any>;
}
export declare const inquirerService: InquirerService;
export {};
