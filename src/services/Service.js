import api from "../config/api";

class Service {

    constructor() {
        this.url = api.url
    }

    async request(resource, options) {

        let headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }

        if (options.headers) {
            headers = {
                ...headers,
                ...options.headers
            }
        }

        return await fetch(`${this.url}${resource}`, {
            ...options,
            headers: headers
        })
            .then(res => res.json())
            .then(res => res).catch(err => ({
                success: false,
                err
            }));

    }
}

export default Service;