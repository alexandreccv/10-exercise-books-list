const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => {
  return books.map((book) => `${book.author.name} - ${book.author.birthYear}`);
};

module.exports = { formatedAuthorNamesBirth };
