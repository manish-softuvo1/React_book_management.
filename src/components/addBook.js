import React from "react";
import BookForm from "./bookForm";
import BooksContext from "../context/booksContext";
import { useContext } from "react";


const AddBook = ({ history }) => {

    const { books, setBooks } = useContext(BooksContext)

    const handleOnSubmit = (book) => {
        // console.log("book", book)
        setBooks([book, ...books]);
        history.push("/");
    };

    return (
        <React.Fragment>
        <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
    );
};


export default AddBook;