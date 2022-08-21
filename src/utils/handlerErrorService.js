module.exports = errorHandler = (statusCode,message) => {
    return {
        statusCode: statusCode || 400,
        message: message.replace(/"/g, '') || 'Bad Request'
    }
}