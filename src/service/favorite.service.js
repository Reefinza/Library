

module.exports = (favoriteRepo) => {
    const { create, list, remove } = favoriteRepo();

    const addFavoriteBook = async (payload) => {
        try {
            return await create(payload);
        } catch (err) {
            throw err
        }
    }
    const getFavoriteBook = async (userId) => {
        try {
             
            return await list(userId);
          
        } catch (err) {
            throw err
        }
    }

    const removeFavoriteBook = async (payload) => {
        try {
            return await remove(payload);
        } catch (err) {
            throw err
        }
    }


    return {
        addFavoriteBook, getFavoriteBook,removeFavoriteBook
    }

}
