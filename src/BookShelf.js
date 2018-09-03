import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  state = {};
  render() {
    const { books, updateShelf } = this.props;
   
      return <ol className="books-grid">
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              books={books}
              updateShelf={updateShelf}
            />
          ))}
        </ol>;
    
  }
}

export default BookShelf;
