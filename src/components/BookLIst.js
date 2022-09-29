import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContexts";
import Bookdetail from "./Bookdetail";

const BookLIst = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <ul>
      {books.map((val) => {
        return <Bookdetail key={val.id} book={val}></Bookdetail>;
      })}
    </ul>
  ) : (
    <h2>No Books to read. Hello free time</h2>
  );
};

export default BookLIst;
