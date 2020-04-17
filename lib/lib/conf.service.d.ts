export declare class ConfService {
    constructor();
    getEmail(): string;
    getBaseApi(): string;
    getJwtPublicKey(): string;
    setEmail(email: string): void;
    setBaseApi(api: string): void;
    setJwtPublicKey(jwtPk: string): void;
}
export declare const config: ConfService;
