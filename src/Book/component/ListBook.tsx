import React, { useEffect, useState } from "react";
import { Book } from "../../Component/interface";
import { Button, Card, Col, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import BookEditForm from "./EditBook";

interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete }) => {
  /*   const data = localStorage.getItem("books");
  alert(data); */

  const handleDelete = (id: number, name: string) => {
    onDelete(id);
    setTimeout(
      () => message.success(`Book '${name}' successfully deleted.`),
      2000
    );
  };

  const [editBook, setEditBook] = useState<Book | null>(null);
  const [bookList, setBookList] = useState<Book[]>([]);

  console.log(bookList);

  const OpenModal = (book: Book) => {
    setEditBook(book); // เก็บข้อมูลหนังสือที่ต้องการแก้ไขไว้ใน editBook
  };

  const handleCancel = () => {
    setEditBook(null);
  };

  const handleEdit = (editedBook: Book) => {
    /*  console.log("Edited book:", editedBook); */
    const index = books.findIndex((book) => book.id === editedBook.id);

    if (index !== -1) {
      const updatedBooks = [...books];
      updatedBooks[index] = editedBook;
      setBookList(updatedBooks);
    }
    setEditBook(null);
  };

  useEffect(() => {
    setBookList(books);
  }, [books]);

  return (
    <>
      {bookList.map((book) => (
        <Card
          key={book.id}
          title={book.name}
          bordered={false}
          style={{ width: "50%", height: "100%", marginBottom: "2rem" }}
        >
          <Col>
            <div className="content">
              <h5>Detail: {book.detail}</h5>
              <h5>Sele Date: {book.date}</h5>
              <h5>ToTal: {book.total}</h5>
              <h5>Price: {book.price} </h5>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                type="primary"
                style={{
                  marginRight: "1rem",
                }}
                onClick={() => handleDelete(book.id, book.name)}
              >
                Delete
              </Button>
              <Button
                type="primary"
                shape="circle"
                onClick={() => OpenModal(book)}
              >
                <EditOutlined />
              </Button>
            </div>
          </Col>
        </Card>
      ))}
      {editBook && (
        <BookEditForm
          book={editBook}
          handleEdit={handleEdit}
          onCancel={handleCancel}
        />
      )}
    </>
  );
};

export default BookList;
