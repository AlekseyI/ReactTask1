import Service from "./Service";

class PostService extends Service {
    async List() {
        return this.request('/posts',{
            method: 'GET'
        });
    }
}

export default new PostService();