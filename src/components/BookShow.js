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
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>;

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