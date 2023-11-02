import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({book, onDelete}) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      {book.title}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
      <button className="delete" onClick={() => onDelete(book.id)}>
        Delete
      </button>
      </div>
    </div>
  )
}

export default BookShow