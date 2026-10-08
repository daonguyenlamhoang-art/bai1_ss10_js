const books = [
    {
        bookCode: "B01",
        title: "Lập trình JavaScript",
        category: "Công nghệ thông tin",
        price: 120000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "A01"
    },
    {
        bookCode: "B02",
        title: "Cơ sở dữ liệu",
        category: "Công nghệ thông tin",
        price: 150000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A02"
    },
    {
        bookCode: "B03",
        title: "Phân tích thiết kế hệ thống",
        category: "Công nghệ thông tin",
        price: 180000,
        totalCopies: 6,
        availableCopies: 2,
        shelfLocation: "B01"
    }
];
const newBook = {
    bookCode: "B04",
    title: "Python",
    category: "Công nghệ thông tin",
    price: 100000,
    totalCopies: 5,
    availableCopies: 5,
    shelfLocation: "B02"
};
books.push(newBook);
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B01") {
        if (books[i].availableCopies > 0) {
            books[i].availableCopies--;
        }
        if (books[i].availableCopies === 0) {
            books[i].status = "HẾT SÁCH TRÊN KỆ";
        }
    }
}
for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B03") {
        books.splice(i, 1);
        break;
    }
}
let totalBooks = 0;
let totalValue = 0;
for (let i = 0; i < books.length; i++) {
    totalBooks += books[i].totalCopies;
    totalValue += books[i].totalCopies * books[i].price;
}
console.log("BẢNG KIỂM KÊ KHO THƯ VIỆN");
for (let i = 0; i < books.length; i++) {
    console.log("Mã sách:", books[i].bookCode);
    console.log("Tên sách:", books[i].title);
    console.log("Số lượng:", books[i].totalCopies);
    console.log("Còn trên kệ:", books[i].availableCopies);
    console.log("Vị trí:", books[i].shelfLocation);
}
console.log("Tổng số lượng sách:", totalBooks);
console.log("Tổng giá trị kho:", totalValue, "VNĐ");