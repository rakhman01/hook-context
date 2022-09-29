import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContexts";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <nav
      className={`w-full h-20 flex justify-between items-center p-4 text-sm sm:text-base md:text-xl font-bold border-b-2 border-white text-white bg-orange-400`}
    >
      <h1>NeNinjaContex</h1>
      <ul className={`w-3/5 md:w-5/12 xl:w-1/4 flex justify-between`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {/* <button onClick={toggleAuth}>Auth</button> */}
      </ul>
    </nav>
  );
};

export default Navbar;
