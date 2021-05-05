import './App.css';
import React , {useState, useEffect} from "react";
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
//state stuff
  const[inputText,setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status, setStatus]=useState("all");
  const[filteredTodos, setFilteredTodos]=useState([]);

// efect 
  useEffect(()=>{
  filterHandler();
  saveLocalTodos();
  },[todos, status]);

//functions
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  };
//save to local
const saveLocalTodos=()=>{
 
    localStorage.setItem('todos',JSON.stringify(todos));
  
}
const getLocalTodos=()=>{
  if(localStorage.getItem('todos')===null){
    localStorage.setItem('todos',JSON.stringify([]));

  }else{
   let todoLocal = JSON.parse(localStorage.getItem('todos'))
   setTodos(todoLocal);
  }
}

  return (
    <div className="App">
<header>
      <h1>Remember.Me!</h1> <div id="mlLogo"><img src="https://avatars.githubusercontent.com/u/63592975?v=4" alt="logo"></img></div>
      <br></br><h2>By:Gabriel</h2>   
     
    </header> 

    <Form 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos}  
    setInputText={setInputText}
    setStatus={setStatus}

    
    />   
   
    <ToDoList 
    filteredTodos={filteredTodos}
    setTodos={setTodos}  
    todos={todos} 

    />
    
    </div>  
    
  );

}
  
export default App;
