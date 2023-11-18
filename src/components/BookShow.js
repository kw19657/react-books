import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

const handleSubmit = () => {
  // set show edit to false on form submit
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>;

  // add to content only if showEdit is true
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book}/>;
  }

  return (
    <div className="book-show">
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}/200`}
      />
      <div>{content}</div>
      {/* {book.title} */}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
      <button className="delete" onClick={() => deleteBookById(book.id)}>
        Delete
      </button>
      </div>
    </div>
  )
}

export default BookShow