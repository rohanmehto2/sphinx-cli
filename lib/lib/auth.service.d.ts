export declare class AuthService {
    constructor();
    login(): Promise<void>;
    logout(): Promise<void>;
    isLoggedIn(): Promise<boolean>;
}
