// src/components/BookCard.js
import React, { useState } from 'react';

const BookCard = ({ book, addToBookshelf }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToBookshelf(book);
    setAdded(true);
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <button onClick={handleAddToCart} disabled={added}>
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default BookCard;
