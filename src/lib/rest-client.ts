const axios = require('axios').default;

class RestService {
    constructor() {}

    async httpGet(url: string, path: string = '',  args: object = {}) {
        try {
            url = `${url}/${path}`;
            const res = await axios.get(url, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async httpPost(url: string, data: object, args: object = {}) {
        try {
            const res = await axios.post(url, data, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async httpPut(url: string, path: string = '', data: object, args: object = {}) {
        try {
            url = `${url}/${path}`;
            const res = await axios.put(url, data, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }
}

export const rest = new RestService();