module.exports = async (bookRequest) => {

    return await bookRequest.bulkCreate([
        {
            title: "The Lord of the Rings",
            author:"J. R. R. Tolkien",
            publicationYearDate: "1954",
            userId:"2"
        },
        {
            title: "The Lion, the Witch and the Wardrobe",
            author:"C. S. Lewis",
            publicationYearDate: "1950",
            userId:"3"

        },
        {
            title: "The Alchemist",
            author:"Paulo Coelho",
            publicationYearDate: "1988",
            userId:"4"
        },
        {
            title: "The Da Vidi Code",
            author:"Dan Hadin",
            publicationYearDate: "2007",
            userId:"4"
        }


    ])

}