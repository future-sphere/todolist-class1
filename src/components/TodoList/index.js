import React from 'react';

const TodoList = ({ todos, handleDeleteTodo }) => {
	return (
		<div>
			{todos.map((todo, i) => (
				<div className='todo'>
					<span>{todo}</span>
					<button onClick={() => handleDeleteTodo(i)}>x</button>
				</div>
			))}
		</div>
	);
};

export default TodoList;
