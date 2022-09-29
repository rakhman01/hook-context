import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContexts";

const Bookdetail = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div
      className="w-96 m-3 text-sm font-bold border rounded-md cursor-pointer p-2 bg-gray-100 hover:bg-gray-300"
      onClick={() => dispatch({ type: "DELETE_BOOK", id: book.id })}
    >
      <li>{book.title}</li>
      <li>{book.author}</li>
    </div>
  );
};

export default Bookdetail;
