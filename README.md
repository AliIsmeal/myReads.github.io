
# MyReads Project
The goal of this project is to show understanding of how to build React app from what we learned from Udacity's React Fundamentals course.The starter template was given by Udacity,but without any of the React code that is needed to complete the project.My job was adding interactivity to the app by refactoring the static code in this template.


## To Get Started 
* clone or download the poroject
* install all project dependencies with `npm install`
* start the development server with `npm start`,it will open new window on local host port no:300 (http://localhost:3000)

## How Myreads App Works
* The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and author(s).
* The main page shows a control that allows users to move books between shelves. 
* To add new book to shelves,click on add button on the main page,then The search page will be displayed
*  As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s).
* Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf. 
* If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf will be selected on the search page. If that book's shelf is changed on the search page, that change will be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf. 
* When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
## Backend Server

 Udacity provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH TERMS](#search-terms). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Search Terms


Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'


##Resources
* [Udacity's React Fundamentals course](https://classroom.udacity.com/nanodegrees/nd001/parts/f4471fff-fffb-4281-8c09-2478625c9597)
* [ReactJs](https://reactjs.org/)
* [Project Rubrics](https://review.udacity.com/#!/rubrics/918/view)