module.exports = errorHandler = (statusCode,message) => {
    return {
        statusCode: statusCode || 500,
        message: message || 'Internal Server Error'
    }
}