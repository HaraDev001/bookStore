const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FMeS9AzpDjClrUuZFY5N/books';

const createBook = async (book) => {
  const res = await fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'Fiction',
    }),
  });
  const data = await res.text();
  return data;
};

const fetchBooks = async () => {
  const response = await fetch(api);
  const data = await response.json();
  return data;
};

const eraseBook = async (id) => {
  const res = await fetch(`${api}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await res.text();
  return data;
};

export { createBook, fetchBooks, eraseBook };
