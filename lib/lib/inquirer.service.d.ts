declare class InquirerService {
    askCredentials(): Promise<any>;
    askConfig(): Promise<any>;
    askName(): Promise<any>;
    askKeyRotationConfirmation(): Promise<any>;
}
export declare const inquirerService: InquirerService;
export {};
