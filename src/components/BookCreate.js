import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookCreate = () => {
  const [ title, setTitle ] = useState('');
  const { createBook } = useBooksContext();

  // set the text in the input box to the title
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  
  // submit form on click
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  }

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button"> Create! </button>
      </form>
    </div>
  )
}

export default BookCreate