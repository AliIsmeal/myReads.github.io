import React, { Component } from "react";

const BookShelfChanger = props => {
  const { books, book, updateShelf } = props;

  let shelfvalue = books.filter(bookShel => bookShel.id === book.id);
  let defaultshelf = shelfvalue[0] ? shelfvalue[0].shelf : "none";
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={defaultshelf}
        onChange={event => updateShelf(book, event.target.value)}
      >
        <option disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}


export default BookShelfChanger;
