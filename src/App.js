//import './App.css'
import User from './components/User'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import Posts from './components/Posts'
import { useSelector } from 'react-redux'

function App() {
	const todos = useSelector(state => state.todo.todos)

	return (
		<div className='min-h-screen h-full w-screen bg-indigo-400'>
			<h1>Redux Toolkit</h1>
			<section className='container mx-auto px-4'>
				<div className='flex gap-20 '>
					<div className='w-1/3'>
						<h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
						<User />
					</div>
					<div className='w-1/3'>
						<h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
						<Form />

						{todos?.map(todo => (
							<TodoItem key={todo.id} todo={todo} />
						))}
					</div>
					<div className='w-1/3'>
						<h1 className='font-bold my-5'>Redux Toolkit Async Thunk</h1>
						<Posts />
					</div>
				</div>
			</section>
		</div>
	)
}

export default App
