import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class ListOfBooks extends Component {
  state = {};
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };
  

  render() {
    const { books, updateShelf } = this.props;

    
      const currentlyReading = books.filter(
        book => book.shelf === "currentlyReading"
      );
      const wantToRead = books.filter(book => book.shelf === "wantToRead");
      const read = books.filter(book => book.shelf === "read");
      const shelfsArray = [currentlyReading, wantToRead, read];

      return shelfsArray.map((shelf,index) => {
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
   
  }
}

export default ListOfBooks;
