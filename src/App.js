import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import footerLinks from './constants/footerLinks';
import Form from './components/Form';
import TodoList from './components/TodoList';

class App extends Component {
	state = {
		data: '',
		todos: ['改考卷', '改作业', '打教练'],
	};
	handleInputChange = e => {
		this.setState({
			data: e.target.value,
		});
	};
	handleSubmitInput = () => {
		const todos = this.state.todos;
		todos.push(this.state.data);
		this.setState({
			todos: todos,
			data: '',
		});
	};
	handleDeleteTodo = index => {
		const todos = this.state.todos;
		todos.splice(index, 1);
		this.setState({
			todos: todos,
		});
	};
	render() {
		return (
			<div className='App'>
				<TodoList
					handleDeleteTodo={this.handleDeleteTodo}
					todos={this.state.todos}
				/>
				<Form
					handleSubmitInput={this.handleSubmitInput}
					handleInputChange={this.handleInputChange}
					data={this.state.data}
				/>
			</div>
		);
	}
}

export default App;
