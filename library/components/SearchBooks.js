import React from 'react';

class SearchBooks extends React.Component{

	constructor(props){
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
	}

	handleFilterTextChange(e) {
		this.props.onFilterTextChange(e.target.value);
	}
	render() {
		return (
			<div >
				<form>
					<input type="text" name="bookSearch" placeholder="Search here by Title" value={this.props.filterText}  onChange={this.handleFilterTextChange}/>
				</form>
			</div>
		);
	}

}

export default SearchBooks;