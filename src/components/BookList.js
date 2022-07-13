import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { getBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      {bookList.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </div>
  );
};

export default BookList;
