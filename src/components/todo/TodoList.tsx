import { useGetTodos } from "api/useGetTodos";
import TodoItem from "components/todo/TodoItem";
import NewTodo from "components/todo/NewTodo";

const TodoList = () => {
	const { todos, addTodo, removeTodo } = useGetTodos();

	return (
		<>
			<NewTodo addTodo={addTodo} />
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
				))}
			</ul>
		</>
	);
};

export default TodoList;