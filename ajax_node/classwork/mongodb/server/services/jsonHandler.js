class JsonHandler {
    constructor(data) {
        this.data = data;
    }

    static createResponse(callback) {
        const response = {
            status: true,
            message: '',
            data: []
        };

        try {
            response.data = callback();
        } catch (e) {
            response.status = false;
            response.message = e.message;
        }
        return JSON.stringify(response)
    }
}

module.exports.jsonHandler = JsonHandler;