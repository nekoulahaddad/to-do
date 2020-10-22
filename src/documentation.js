//react using hooks 

//we replace class based components with functions that has a return attribute like in the example below

//useState
const [count, setCount] = useState(0);
const [data, setData] = useState(null);
const [hidden, setHidden] = useState(true);
const [items, setItems] = useState([]);
const [itemName, setItemName] = useState("");
const [form, setState] = useState({
username: '',
password: ''
});

function hello(){
const [text,setText] = setState("");

onSubmit = () => {
e.prevent.default();
if(!text) return;
addTodo(value);
setText("");
 
} 

return (
<div>
<form onSubmit={onSubmit} >
<input type="text" className="input" value={text} onChange={ e => setText(e.target.value)} />

</form>
</div>
)
}

//so we can use functional components for every thing 


/*
use Effect with an empty array as a second argument is equivelent to 'component did amount' --> so it runs only one time when the component did mount
and with some variables --> so the function will run every time these variables will be changed
*/

//example
//1) with hooks 
useEffect( () => {
fetchData();
},[])
 
//2) without hooks 
componentDidMount(){
	this.fetchData();
}

//componentDidUpdate 
//1) with hooks 
useEffect( () => {
fetchData();
},[User,props.selectedChar])

//2) without hooks
componentDidMount(){
	this.fetchData();
}

//componentWillUnmount -- when i close the current component or moving to another component 
//1) with hooks 
useEffect( () => {
fetchData();
return () => {
	console.log("cleaning up ...")
};
},[User,props.selectedChar]) // if i have arguments so it will run every time these arguments changed or mounts and unmount --> so it also run after the update

useEffect( () => {
fetchData();
return () => {
	console.log("cleaning up ...")
};
},[]) // here there is no arguments so it will run only when i unmount the component

//2) without hooks
componentWillUnmount(){
	console.log("cleaning up ...")
}


//there is something called react.memo(the name of the component) -- i use it when i do export default "the name of the component"
// it is equal to shouldComponentUpdate(nextProps,nextState)

// you can build a custom hook