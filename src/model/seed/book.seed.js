module.exports = async (bookModel) => {
    return await bookModel.bulkCreate([
        {
        title: "Laksar Pelangi",
        cover: "https://cdn.gramedia.com/uploads/items/9789793062792_New-Edition-Laskar-Pelangi.jpg",
        author: "Andrea Hirata",
        publisher: "Bentang Pustaka",
        publicationYearDate: "1988",
        isbn: "979-3062-79-7",
        bookCategoryId: 1
    },
        {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361293878l/4248.jpg",
        publisher: "Doubleday",
        publicationYearDate: "2003",
        isbn: "9780385534246",
        bookCategoryId: 1
    },
     {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J. K. Rowling",
        cover : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
        publisher: "Bloomsbury",
        publicationYearDate: "1997",
        isbn: "9780747532743",
        bookCategoryId: 1
    },
    {
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        cover: "https://ebooks.gramedia.com/ebook-covers/76535/image_highres/BLK_TLOTR2022295520.jpg",
        publisher: "Allen & Unwin",
        publicationYearDate: "1954",
        isbn: "9780006544736",
        bookCategoryId: 1

    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "https://upload.wikimedia.org/wikipedia/en/c/c4/TheAlchemist.jpg?20190516002043",
        publisher: "Harper Torch",
        publicationYearDate: "1988",
        isbn: "	0-06-250217-4",
        bookCategoryId: 1
    },
    {
        title: "The Lion, the Witch and the Wardrobe",
        author: "C. S. Lewis",
        cover: "https://ebooks.gramedia.com/ebook-covers/76010/image_highres/BLK_TCONSS2022806322.jpg",
        publisher: "Geoffrey Bles",
        publicationYearDate: "1950",
        isbn: "97800065447361",
        bookCategoryId: 1
    },
    {
        title: "One Piece Volume 1: Romance Dawn",
        author: "Eiichiro Oda",
        cover: "https://static.wikia.nocookie.net/onepiece/images/0/0e/Volume_1.png/revision/latest/scale-to-width-down/315?cb=20220426144844",
        publisher: "Shonen Jump Magazine",
        publicationYearDate: "1997",
        isbn: "9791136287489",
        bookCategoryId: 2
    },
    {
        title: "One Piece Volume 2: Buggy the Clown:",
        author: "Eiichiro Oda",
        cover: "https://static.wikia.nocookie.net/onepiece/images/2/2f/Volume_2.png/revision/latest?cb=20130115021820",
        publisher: "Shonen Jump Magazine",
        publicationYearDate: "1997",
        isbn: "9781591160571",
        bookCategoryId: 2
    },
    {
        title: "One Piece Volume 3: Things That Can't Be Faked",
        author: "Eiichiro Oda",
        cover: "https://dw9to29mmj727.cloudfront.net/products/1591163374.jpg",
        publisher: "Shonen Jump Magazine",
        publicationYearDate: "1998",
        isbn: "9780575078703",
        bookCategoryId: 2
    },
    {
        title: "Fiksi dan perababan Manusia",
        author: "Stevano Suwuh",
        cover: "https://media-exp1.licdn.com/dms/image/C5103AQFgWfqpUmri5g/profile-displayphoto-shrink_200_200/0/1558104880030?e=1666224000&v=beta&t=OpDqG9kA21CKHSFW_V_VzPOVkxMY-y5NQOPGUdRenzg",
        publisher: "Kompasiana",
        publicationYearDate: "2018",
        isbn: "9780575078702",
        bookCategoryId: 3
    },
    ]);
}
