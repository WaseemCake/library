import React from 'react';

class Books extends React.Component{

	constructor(props) {
		super(props)
		let book = this.props.book;
		this.isbn = book.isbn;
		this.title = book.title;
		this.author = book.author;
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleEdit(e) {

	}

	render() {
		return (
			<tr >
				<td><span >{this.isbn}</span></td>
				<td><span>{this.title}</span></td>
				<td><span>{this.author}</span></td>
				<td><input type="checkbox" name="edit" onClick ={this.handleEdit} /></td>
			</tr>
		);
	}
}

export default Books;