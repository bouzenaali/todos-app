import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        if (!todo.text || /^\s*$/.test(todo.text)){
        return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(...todos);

    }   

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.text(newValue.text)){
            return;
        }

        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
    };

    const removeTodo = id =>{
        const removedArr = [...todos].filter(item => item.id !== id);
        setTodos(removedArr);
    }

    const completeTodo = id =>{
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplet = !todo.isComplet;
            };
            return todo;
        });
        setTodos(updatedTodos);
    }


  return (
    <>
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
        <Todo
        todos = {todos}
        completeTodo = {completeTodo}
        removeTodo = {removeTodo}
        updateTodo = {updateTodo}
        />

    </>
    )
}

export default TodoList