import { createBook, fetchBooks, eraseBook } from './api';

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const GET_BOOKS = 'book-store/books/GET_BOOKS';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const sortByTitle = (a, b) => {
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return -1;
};

const sortedBooks = (books) => books.sort(sortByTitle);

const addBook = (payload) => async (dispatch) => {
  await createBook(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

const getBooks = () => async (dispatch) => {
  const result = await fetchBooks();
  const books = Object.entries(result).map(([itemId, [book]]) => ({
    id: itemId,
    title: book.title,
    author: book.author,
    category: book.category,
  }));
  dispatch({
    type: GET_BOOKS,
    payload: sortedBooks(books),
  });
};

const removeBook = (payload) => async (dispatch) => {
  await eraseBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const initialState = [];

const bookReducer = (state = initialState, action) => {
  const books = [...state, action.payload];
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return sortedBooks(books);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export { addBook, removeBook, getBooks };
export default bookReducer;
