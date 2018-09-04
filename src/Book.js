import React, { Component } from "react";

import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  render() {
    const { books, updateShelf, book } = this.props;

    let bookCover = book.imageLinks ? book.imageLinks.thumbnail : "No image";
    return (
      <li >
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: "url(" + bookCover + ")"
              }}
            />

            <BookShelfChanger
              key={book.id}
              book={book}
              books={books}
              updateShelf={updateShelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          {book.authors &&
            book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
