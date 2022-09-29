import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContexts";

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BOOK",
      book: {
        title,
        author,
      },
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-center"
      >
        <div className="w-96 flex justify-between text-left p-2 mt-2 bg-slate-400 rounded-md">
          <label for="title" className="w-4/12 ">
            title
          </label>
          <input
            id="title"
            type={"text"}
            placeholder="rakhman"
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-8/12 h-8 px-2 rounded-md"
          />
        </div>
        <div className="w-96 flex justify-between text-left p-2 mt-2 bg-slate-400 rounded-md">
          <label for="author" className="w-4/12">
            author
          </label>
          <input
            id="author"
            type={"text"}
            placeholder="rakhman"
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="w-8/12 h-8 px-2 rounded-md"
          />
        </div>
        <input
          type={"submit"}
          value="addBook"
          className="w-20 h-8 mt-4 border border-white rounded-md bg-orange-400"
        />
      </form>
    </div>
  );
};

export default BookForm;
