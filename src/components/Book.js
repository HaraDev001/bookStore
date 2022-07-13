import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <div className="bookItem d-flex">
      <div className="book">
        <h5 className="category">Inspirational</h5>
        <h1 className="bookTitle">{book.title}</h1>
        <p className="bookAuthor">{book.author}</p>
        <button type="button" className="onBook comment">Comment</button>
        <button type="button" onClick={() => deleteBook(book.id)} className="remove">Remove</button>
        <button type="button" className="onBook">Edit</button>
      </div>
      <div className="middleSide d-flex">
        <div className="circle-wrap align">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>

            <div className="mask half">
              <div className="fill" />
            </div>

            <div className="inside-circle align" />
          </div>
        </div>

        <div className="percentageText d-flex align">
          <p className="percentage">80%</p>
          <p className="completedP">Completed</p>
        </div>
      </div>
      <div className="line2" />
      <div className="chapterUpdate">
        <p className="chapterHeading">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 1</p>
        <button type="button" className="progress align">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.exact({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Book;
