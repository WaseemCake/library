
import {ACTION_TYPES} from "../actions/action.js";

export function booksReducer(state = [books: {}], action) {
	switch (action.type) {
		case ACTION_TYPES.ADDED_BOOK:
			let books = [...state.books, action.book];
			return {
				books: books
			};
		case ACTION_TYPES.FETCHED_BOOKS:
			return {
				books: action.books
			};
		default:
			return {
				books: []
			}
	}

}