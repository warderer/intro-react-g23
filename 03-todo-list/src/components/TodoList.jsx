import { useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  /* Estado para manejar el input para agregar una tarea */
  const [inputValue, setInputValue] = useState('')

  /* Estado para almacenar la lista de tareas que voy a agregando en un arreglo */
  const [todos, setTodos] = useState([])

  /* Función que agrega tareas a mi lista */
  const handleAddItem = () => {
    if (inputValue.trim()) { // .trim() me ayuda a limpiar espacios en blanco, al inicio y al final de la cadena
      setTodos([...todos, inputValue])
      setInputValue('') // Vacío mi input para volver a escribir
    }
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((item, i) => i !== index))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Para tomar control de la información que hay en input, podemos hacer uso del evento onChange para guardar la información
      del input a penas sea teclado y guardarla en mi estado */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddItem}>Agregar</button>
      <ul>
        {todos.map((item, index) => (
          <TodoItem
            todo={item}
            handleDelete={() => handleDelete(index)}
            key={index}
          />
        ))}
      </ul>
    </div>

  )
}
export default TodoList
