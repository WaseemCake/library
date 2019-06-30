import React from 'react';

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

export default AddBookForm;