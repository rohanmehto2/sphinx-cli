declare class RestService {
    constructor();
    baseApi: any;
    httpGet(url: string, path?: string, args?: object): Promise<any>;
    httpPost(url: string, data: object, args?: object): Promise<any>;
    httpPut(url: string, path: string | undefined, data: object, args?: object): Promise<any>;
}
export declare const rest: RestService;
export {};
