import styles from '../styles/library.css';

import React from 'react';

import books from '../data/books.json';
import SearchBooks from '../components/SearchBooks.js'
import BooksList from '../components/BooksList.js'

import {createStore} from "redux";

const store = createStore(booksReducer);
const { getState, dispatch } = store;

function addBookToServer(book) {
	// return fetch('/book',{
	//         method: 'post',
	//         data: book
	//     }).then(function(response){
	dispatch({
		type: 'added_book',
		book: book
	});
	// });
}

function fetchBooksFromServer() {
	return fetch('./data/books.json').then(function(response) {
		return response.json();
	}).then(function(books) {
		dispatch({
			type: 'fetched_books',
			books: books
		});
	});
};

function booksReducer(state = [books: {}], action) {
	switch (action.type) {
		case 'added_book':
			let books = [...state.books, action.book];
			return {
				books: books
			};
		case 'fetched_books':
			return action.books;
		default:
			return {
				books: []
			}
	}

}

class AddBookForm extends React.Component {
	constructor(props){
		super(props)

        this.changeISBN = this.changeISBN.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.addBook = this.addBook.bind(this);
	}

	changeISBN(e){
        this.setState({
            isbn: e.target.value
        });
    }

    changeTitle(e){
        this.setState({
            title: e.target.value
        });
    }

    changeAuthor(e){
         this.setState({
            author: e.target.value
        });
    }

	addBook(e) {
		e.preventDefault();
        addBookToServer(this.state);
	}

	render() {
		return (
			<div className={this.props.className}>
				<form onSubmit={this.addBook}>
					<input type="text" name="isbn" placeholder="Enter Book ISBN no." defaultValue={ this.props.isbn } onChange={this.changeISBN}/>
					<input type="text" name="title" placeholder="Enter Book title" defaultValue={ this.props.title } onChange={this.changeTitle}/>
					<input type="text" name="author" placeholder="Enter Book author" defaultValue={ this.props.author } onChange={this.changeAuthor}/>
					<input type="submit" name="submit" value="Save"/>
				</form>
			</div>
		);
	}

}

class Library extends React.Component {
	
	constructor(props) {
		super(props)
		this.books = books;
		this.state = {
			filterText:'',
			AddFormHide: 'show',
			isbn:'',
			title:'',
			author:'',
			editable:false
		}

		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		        
        store.subscribe( () => this.forceUpdate() );
        fetchBooksFromServer();

	}

	handleFilterTextChange(filterText) {
		this.setState({
			filterText:filterText
		});
	}

	render() {
		return (

			<div className="librayContainer">

				<SearchBooks 
					filterText={this.state.filterText}				
					onFilterTextChange = {this.handleFilterTextChange}
				/>

				<BooksList 
					filterText={this.state.filterText}
					store={store}
				/>
				
				<AddBookForm className={this.state.AddFormHide}/>

			</div>
		);
	}
}

export default Library;