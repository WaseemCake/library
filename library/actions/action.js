export const ACTION_TYPES = {
    ADDED_BOOK: 'added_book',
    FETCHED_BOOKS: 'fetched_books'
}

export function addBook(book) {
    return {
        type: ACTION_TYPES.ADDED_BOOK,
        book: book
    };
}

export function fetchBooks(books) {
    console.log(books);
    return {
        type: ACTION_TYPES.FETCHED_BOOKS,
        books: books
    };
}

export function fetchBooksFromServer() {
	return fetch('./data/books.json').then(function(response) {
		return response.json();
	}).then(function(books) {
		dispatch(fetchBooks(books))
	});
};


export function addBookToServer(book) {
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
