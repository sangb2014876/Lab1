class ApiError  extends Error {
    constructor(statusCode, message){

        super();
        this.statusCode = stutusCode;
        this.message = message;
    }

}

module.exports = ApiError;