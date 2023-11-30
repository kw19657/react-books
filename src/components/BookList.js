import BookShow from './BookShow';
import useBooksContext from '../hooks/use-books-context';

const BookList = () => {
  const { books } = useBooksContext()

  // maps the list of books to screen
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />
  })
  
  // return rendered books
  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  )
}

// export the booklist
export default BookList