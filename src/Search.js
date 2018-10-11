import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import debounce from "lodash.debounce";
import Book from "./Book";
import PropTypes from "prop-types";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchedBooks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.emitChangeDebounce = debounce(this.emitChange, 1000);
  }

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  emitChange(value) {
    this.updateQuery(value);
  }

  handleChange(e) {
    this.emitChangeDebounce(e.target.value);
  }

  updateQuery = query => {
    this.setState({ query: query });
    //chech  if query is valid and not empty string
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
    const { searchedBooks } = this.state;
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
              onChange={this.handleChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>

        <div className="search-books-results">
          <div className="books-grid">
            {/*if searchedbooks is valid , iterate searchedbooks array using map method */}
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
        <div />
      </div>
    );
  }
}

export default Search;
