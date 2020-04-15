declare class UserService {
    listUsers(): Promise<any>;
    updateUser(data: object): Promise<boolean>;
    getUserInfo(): Promise<any>;
    setUserConf(baseApi: string, email?: string): Promise<boolean>;
    setUpKeys(): Promise<void>;
    getPublicKeyByEmail(email: string): Promise<string>;
}
export declare const userService: UserService;
export {};
