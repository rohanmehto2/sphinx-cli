const axios = require('axios').default;
const Configstore = require('configstore');
const pkg = require('../../package.json');

const conf = new Configstore(pkg.name);

class RestService {
    constructor() {}

    baseApi = conf.get('sphinx.baseApi');

    async httpGet(url: string, path: string = '',  args: object = {}) {
        try {
            url = `${this.baseApi}${url}/${path}`;
            const res = await axios.get(url, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async httpPost(url: string, data: object, args: object = {}) {
        try {
            url = `${this.baseApi}${url}`;
            const res = await axios.post(url, data, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

    async httpPut(url: string, path: string = '', data: object, args: object = {}) {
        try {
            url = `${this.baseApi}${url}/${path}`;
            const res = await axios.put(url, data, args);
            return res.data;
        } catch (err) {
            console.log(err);
        }
    }

}

export const rest = new RestService();