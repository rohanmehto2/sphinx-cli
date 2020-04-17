const axios = require('axios').default;
import { config } from './conf.service';
import { authService } from './auth.service';


class RestService {
    constructor() {}

    baseApi = config.getBaseApi();

    async httpGet(url: string, path: string = '',  args: any = {}) {
        try {
            const accessToken = await authService.getAccessToken();
            args.headers = {
                'Authorization': `Bearer ${accessToken}`
            }
            url = `${this.baseApi}${url}/${path}`;
            const res = await axios.get(url, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async httpPost(url: string, data: object, args: any = {}) {
        try {
            const accessToken = await authService.getAccessToken();
            args.headers = {
                'Authorization': `Bearer ${accessToken}`
            }
            url = `${this.baseApi}${url}`;
            const res = await axios.post(url, data, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async httpPut(url: string, path: string = '', data: object, args: any = {}) {
        try {
            const accessToken = await authService.getAccessToken();
            args.headers = {
                'Authorization': `Bearer ${accessToken}`
            }
            url = `${this.baseApi}${url}/${path}`;
            const res = await axios.put(url, data, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

}

export const rest = new RestService();