// src/components/BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard'; // Correct relative path

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 2) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="book-search">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a book..."
      />
      <div className="search-results">
        {results.map(book => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
