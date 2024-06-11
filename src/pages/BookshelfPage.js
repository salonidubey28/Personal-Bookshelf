// src/pages/BookshelfPage.js
import React from 'react';

const BookshelfPage = ({ bookshelf, removeFromBookshelf }) => {
  return (
    <div className="bookshelf-page">
      <h1>My Bookshelf</h1>
      {bookshelf.length === 0 ? (
        <p>No books in your bookshelf.</p>
      ) : (
        <div className="bookshelf">
          {bookshelf.map(book => (
            <div key={book.key} className="bookshelf-item">
              <h3>{book.title}</h3>
              <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
              <button onClick={() => removeFromBookshelf(book)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => window.location.href = '/'}>Back to Search</button>
    </div>
  );
};

export default BookshelfPage;
