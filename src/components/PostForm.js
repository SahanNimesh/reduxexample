import React, { Component } from 'react';

class PostForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			body: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e){
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'	
			},
			body: JSON.stringify(post)
		})
		.then(res => res.json())
		.then(data => console.log(data));
	}

	render(){
		return (
			<div>
				<h1>Add Post</h1>					
				<form onSubmit={this.handleSubmit}>
					<div>
						<label for="title">Title: </label>
						<br />
						<input type="text" name="title" id="title" value={ this.state.title } onChange={ this.handleChange } />
					</div>
					<div>
						<label for="body">Body:</label>
						<br />
						<textarea name="body" id="body" cols="30" rows="10" value={ this.state.body }  onChange={ this.handleChange } />
					</div>
					<button type="submit">SUBMIT</button>
				</form>
			</div>
		);
	}
}

export default PostForm;