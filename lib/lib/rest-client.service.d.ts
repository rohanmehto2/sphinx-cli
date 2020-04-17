declare class RestService {
    constructor();
    baseApi: string;
    httpGet(url: string, path?: string, args?: any): Promise<any>;
    httpPost(url: string, data: object, args?: any): Promise<any>;
    httpPut(url: string, path: string | undefined, data: object, args?: any): Promise<any>;
}
export declare const rest: RestService;
export {};
