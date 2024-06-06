const { books } = require('./data/library');

const nameAndAge = () => books.map((book) => (
  {
    author: book.author.name,
    age: book.releaseYear - book.author.birthYear,
  }
)).sort((objAuthor, objAge) => objAuthor.age - objAge.age);

module.exports = { nameAndAge };
