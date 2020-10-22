import React,{useState} from 'react';


function Todo({todo,index,CompleteTask,deleteTask}) {   //make sure you put brackets cuz we are restructioring it from the props
	return (
	<div >
	<div style={{textDecoration:todo.isCompleted ? 'line-through' : ''}} className="todo">{todo.name}</div>
	<button  onClick={() => CompleteTask(index)}>done</button>
	<button  onClick={() => deleteTask(index)}>x</button>
	</div>

)}


function TodoForm({addTodo}) {
	const [value,setValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if(!value) return;
		console.log(value)
		addTodo(value);
		setValue('');
	}

	return(
		<div className="form">
	<form onSubmit={handleSubmit}>
	<input type="text" className="input" value={value} onChange={ e => setValue(e.target.value)} />
	</form>
	</div>
	)
}

function ToDo(){
	const [todos,setTodos] = useState([
	{
		name:"make bed",
		isCompleted:false
	},
	{
		name:"make food",
		isCompleted:true
	},
	{
		name:"make web app",
		isCompleted:false
	}
	]);

	const addTodo = (name) => {
		const newTodos = [...todos,{name}];
		setTodos(newTodos)
	}

	const CompleteTask = index =>  {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos)
	}

	const deleteTask = index =>  {
	const newTodos = [...todos];
	const result = newTodos.filter(todo => todo != newTodos[index]);
	newTodos.splice(index,1);
	setTodos(newTodos)
}



  return (
    <div className="to-do">
    {todos.map((todo,index) => (
    	<Todo key={index} index={index} todo={todo} CompleteTask={CompleteTask} deleteTask={deleteTask} />
    	))}
    <TodoForm  addTodo={addTodo}/>
    </div>
  );

}


export default ToDo;
