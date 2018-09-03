import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    query: "",
    searchedBooks: []
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };
  updateQuery = query => {
    this.setState({ query: query });
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        console.log(books);
        if (books !== undefined) {
          this.setState({ searchedBooks: books });
        } else if (books.error === "empty query") {
          console.log(books.error);
          this.setState({ searchedBooks: [], query: "" });
        }
      });
    } else {
      this.setState({ searchedBooks: [], query: "" });
    }
  };

  render() {
    const { searchedBooks, query } = this.state;
    const { books, updateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">
          <div className="books-grid">
            {searchedBooks.length > 0 &&
              searchedBooks.map(book => (
                <Book
                  key={book.id}
                  book={book}
                  books={books}
                  updateShelf={updateShelf}
                />
              ))}
          </div>
        </div>
        <div className="no-result" />
      </div>
    );
  }
}

export default Search;
