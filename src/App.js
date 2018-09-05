import React from "react";
import * as BooksAPI from "./BooksAPI";
import Search from "./Search";
import ListOfBooks from "./ListOfBooks";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }
  //update shelves
  updateShelf = (Book, updatedhelf) => {
    BooksAPI.update(Book, updatedhelf).then(res => {
      const updatedBooks = [
        ...res.currentlyReading,
        ...res.wantToRead,
        ...res.read
      ];
      Book.shelf = updatedhelf;

      let list = [];
      for (let book of updatedBooks) {
        for (let Fbook of this.state.books) {
          if (book === Fbook.id) {
            book = Fbook;
            list.push(book);
          }
        }
      }

      const listOfBooks = list.filter(book => book.id !== Book.id);
      listOfBooks.push(Book);
      this.setState({ books: listOfBooks });
    });
  };
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListOfBooks books={books} updateShelf={this.updateShelf} />
          )}
        />

        {
          <Route
            exact
            path="/Search"
            render={({ history }) => (
              <Search books={books} updateShelf={this.updateShelf} />
            )}
          />
        }
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}

export default BooksApp;
