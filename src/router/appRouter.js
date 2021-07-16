import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/header";
import AddBook from "../components/addBook";
import BooksList from "../components/booksList";
import useLocalStorage from "../hooks/useLocalStorage";
import EditBook from "../components/editBook";
import BooksContext from "../context/booksContext";

const AppRouter = () => {
    const [ books, setBooks] = useLocalStorage("books", [])

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                   <BooksContext.Provider value ={{books, setBooks}}>
                       <Switch>
                           <Route component={BooksList} path="/" exact={true} />
                           <Route component={AddBook} path="/add" />
                           <Route component={EditBook} path="/edit/:id" />
                           <Route component={() => <Redirect to="/" />} />
                       </Switch>
                   </BooksContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    )
};


// const AppRouter = () => {
//   const [books, setBooks] = useLocalStorage('books', []);

//   return (
//     <BrowserRouter>
//       <div>
//         <Header />
//         <div className="main-content">
//           <Switch>
//             <Route
//               render={(props) => (
//                 <BooksList {...props} books={books} setBooks={setBooks} />
//               )}
//               path="/"
//               exact={true}
//             />
//             <Route
//               render={(props) => (
//                 <AddBook {...props} books={books} setBooks={setBooks} />
//               )}
//               path="/add"
//             />
//           </Switch>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };


export default AppRouter;