module.exports = () => {
    const successMessage = (code, message, data) => ({
        code: code,
        message: message,
        data: data,
    });
    const errorMessage = (code, message) => ({
        code: code,
        message: message,
    });

    const pagination = (
        code, message, data, keyword, page, totalItem, size, sortBy, sortType
    ) => {
        if (isNaN(page) || isNaN(size)) {
            page = 1, size = 10
        }
        return {
            code: code,
            message: message,
            data: data,
            keyword: keyword,
            sortBy: sortBy,
            sortType: sortType,
            paging : {
                page: Number(page),
                totalPages: Math.ceil(totalItem / size),
                totalRows: totalItem,
                rowsPerPage: Number(size)
            }
        }
    }

    return {
        successMessage, errorMessage, pagination
    }
}
