import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookEdit = ({book, onSubmit}) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  // handle any keyboard inputs on the form
  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  // logic to submit the form
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(book.id, title);

  }

  // return the corresponding jsx
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  )
}

export default BookEdit