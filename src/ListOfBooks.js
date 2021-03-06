import React, { Component } from "react";

import BookShelf from "./BookShelf";

const ListOfBooks = props => {
  const { books, updateShelf } = props;
  // filter books based on shelve category
  const currentlyReading = books.filter(
    book => book.shelf === "currentlyReading"
  );

  const wantToRead = books.filter(book => book.shelf === "wantToRead");
  const read = books.filter(book => book.shelf === "read");

  const shelvesArray = [currentlyReading, wantToRead, read];
  //iterate through shelvesArray and categrize books based on book's shelf value
  return shelvesArray.map((shelf, index) => {
    const shelfTitle =
      shelf === currentlyReading
        ? "Currently Reading"
        : shelf === wantToRead
          ? "Want To Read"
          : shelf === read
            ? "Read"
            : "None";
    return (
      <div className="list-books-content" key={index}>
        <div className="bookshelf">
          <h2 className="bookshelf-title"> {shelfTitle}</h2>
          <div className="bookshelf-books">
            <BookShelf books={shelf} updateShelf={updateShelf} />
          </div>
        </div>
      </div>
    );
  });
};

export default ListOfBooks;
