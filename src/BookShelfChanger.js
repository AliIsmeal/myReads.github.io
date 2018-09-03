import React, { Component } from "react";

class BookShelfChanger extends Component {
  render() {
    const { books, book, updateShelf } = this.props;

    let defaultShelf = books.filter(bookShel => bookShel.id === book.id);

    return (
      <div className="book-shelf-changer">
        <select
          defaultValue={defaultShelf[0] && defaultShelf[0].shelf}
          onChange={event => updateShelf(book, event.target.value)}
        >
          <option value="none">
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
