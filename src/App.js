import { useEffect, useContext } from "react";
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from "./context/books";

const App = () => {
  const { fetchBooks } = useContext(BooksContext)

  // to load the books each time the main page loads
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App