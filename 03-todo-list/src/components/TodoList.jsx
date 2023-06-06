import { useState } from "react"
import TodoItem from "./TodoItem"


const TodoList = () => {
    const [inputValue, setInputValue] = useState('')

    const handleAddItem = () => {
        console.log("Nueva tarea:", inputValue)
    }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Para tomar control de la información que hay en input, podemos hacer uso del evento onChange para guardar la información
      del input a penas sea teclado y guardarla en mi estado */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleAddItem}>Agregar</button>
      <ul>
        <TodoItem />
      </ul>
    </div>
    
  )
}
export default TodoList