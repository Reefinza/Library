module.exports = async (bookModel) => {
    return await bookModel.bulkCreate([
        {
        title: "The Alchemist",
        author: "Paulo Coelho",
        publisher: "HarperCollins",
        publicationYearDate: "1988-01-01",
        isbn: "9780062315007",
        booksCategoryId: 1
    },
        {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        publisher: "Doubleday",
        publicationYearDate: "2003-01-01",
        isbn: "9780385534246",
        booksCategoryId: 2
    },
     {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        publisher: "Bloomsbury",
        publicationYearDate: "1997-01-01",
        isbn: "9780747532743",
        booksCategoryId: 3
    },
    {
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        publisher: "Allen & Unwin",
        publicationYearDate: "1954-01-01",
        isbn: "9780006544736",
        booksCategoryId: 4

    },
    {
        title: "The Lion, the Witch and the Wardrobe",
        author: "C. S. Lewis",
        publisher: "Geoffrey Bles",
        publicationYearDate: "1950-01-01",
        isbn: "97800065447361",
        booksCategoryId: 5
    }
    ]);
}
