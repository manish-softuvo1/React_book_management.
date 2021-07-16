import React, { useContext } from "react";
import _ from "lodash";
import Book from "./book";
import BooksContext from "../context/booksContext";

// const BooksList = ({books, setBooks}) => {

//     const handleRemoveBook = (id) =>{
//         setBooks(books.filter((book) => book.id !== id));
//     };



const BooksList = () => {

  const { books, setBooks } = useContext(BooksContext);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add</p>
        )}
        {/* {console.log("books", books)} */}
      </div>
    </React.Fragment>
  );
};

// {!_.isEmpty(books) ? (
//     books.map((book) => {
//         <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
//     })
// ) : (
//     <p className="message" >No books available. Please add</p>
// )}


export default BooksList;