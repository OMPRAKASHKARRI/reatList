import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, setEditTodo} = props
  const {id, title} = todoDetails

  // Method to handle the delete button click
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  // Method to handle the edit button click
  const onEditTodo = () => {
    setEditTodo(id, title)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <div className="buttons-container">
        <button type="button" className="edit-btn" onClick={onEditTodo}>
          Edit
        </button>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
