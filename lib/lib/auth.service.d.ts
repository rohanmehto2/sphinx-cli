export declare class AuthService {
    private readonly keytarAccount;
    login(credentials: any): Promise<void>;
    logout(): Promise<void>;
    getAccessToken(): Promise<string>;
    getRefreshToken(): Promise<string>;
    setAccessToken(token: string): Promise<void>;
    setRefreshToken(token: string): Promise<void>;
    deleteAccessToken(): Promise<void>;
    deleteRefreshToken(): Promise<void>;
    fetchAccessToken(): Promise<boolean>;
    isLoggedIn(): Promise<boolean>;
    verifyPassword(password: string): Promise<boolean>;
}
export declare const authService: AuthService;
