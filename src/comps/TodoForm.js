import React,{useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    });


    const handleChange = e =>{
        setInput(e.target.value)
    };

    const handleSubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text: input
        });
        setInput('');
    };

    



  return (
    <form className='todo-form' onSubmit={handleSubmit}>

       {props.edit ? (
        <>
        <input 
            placeholder='update your todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input edit'
            ref={inputRef}
        />

        <button className='todo-button edit'>update todo</button>
        </>
       ) : (
        <>
        <input 
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
        />

        <button className='todo-button'>add todo</button>
      
        </>
        )}
    </form>
    
  )
}

export default TodoForm