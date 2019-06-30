import React from 'react';
import Books from '../components/Books.js'

class BooksList extends React.Component{

	render() {
		const rows = [];
	    const filterText = this.props.filterText;
	    const editable = this.props.editable;

		this.props.store.getState().books.map((book , index) => { 

			if (book.title.indexOf(filterText) === -1) {
				return;
			}

			rows.push(<Books book = {book} key = {index} editable = {editable} />)
		});
		return (
			<table>
				<thead>
					<tr> 
						<th> ISBN No. </th>
						<th> Title </th>
						<th> Author</th>
						<th></th>
				</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>					
		);
	}
}

export default BooksList;
