import React from 'react';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const Books = () => (
  <div className="homearea">
    <BookList />
    <div className="line" />
    <AddBook />
  </div>
);

export default Books;
