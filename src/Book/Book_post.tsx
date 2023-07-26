// src/App.tsx

import React, { useState } from "react";
import { Book } from "../Component/interface";
import BookForm from "./component/Bookform";
import BookList from "./component/ListBook";
import axios from "axios";
import Menu from "../Menu";
import Footer from "../Component/Footer";

const App: React.FC = () => {
  const [bookpost, setBookPost] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Book[]>([]);

  const AddBook = (book: Book) => {
    setBookPost([book, ...bookpost]);
  };

  const DeleteBook = (id: number) => {
    setBookPost(bookpost.filter((book) => book.id !== id));
  };

  return (
    <>
      <Menu />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          backgroundImage: 'url("/img/bg1.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <BookForm handleSubmit={AddBook} setnewBook={setNewBook} />
        </div>
        <BookList books={bookpost} onDelete={DeleteBook} />
      </div>
      <Footer />
    </>
  );
};

export default App;
