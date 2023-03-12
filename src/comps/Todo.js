import React,{useState} from 'react'
import TodoForm from './TodoForm'
function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value:''
    })

  return TodoList.map((todo, index) => {
    <div className={todo.isComplet ? 'todo-row complete' :'todo-row'} 
    key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
         {todo.text}
         </div>
         <div className='icons'>
    
         </div>
    </div>
  })
}

export default Todo