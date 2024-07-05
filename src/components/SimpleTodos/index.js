import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

// Initial list of todos
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList, // Store the list of todos in the state
    newTodoTitle: '', // Store the title of the new todo to be added
    editTodoId: null, // Store the id of the todo being edited
  }

  // Method to delete a todo based on its id
  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList, // Update the state with the filtered list
    })
  }

  // Method to add a new todo or update an existing todo
  addTodo = () => {
    const {todosList, newTodoTitle, editTodoId} = this.state
    if (newTodoTitle.trim() !== '') {
      // Check if the input is not empty
      if (editTodoId) {
        // If there's an editTodoId, update the existing todo
        const updatedTodosList = todosList.map(todo =>
          todo.id === editTodoId ? {...todo, title: newTodoTitle} : todo,
        )
        this.setState({
          todosList: updatedTodosList, // Update the state with the edited todo
          newTodoTitle: '', // Clear the input field
          editTodoId: null, // Reset the editTodoId
        })
      } else {
        // Otherwise, add a new todo
        const newTodo = {
          id: todosList.length + 1, // Assign a new id
          title: newTodoTitle,
        }
        this.setState({
          todosList: [...todosList, newTodo], // Add the new todo to the list
          newTodoTitle: '', // Clear the input field
        })
      }
    }
  }

  // Method to handle changes in the input field
  onChangeNewTodoTitle = event => {
    this.setState({newTodoTitle: event.target.value})
  }

  // Method to set the editTodoId and pre-fill the input field with the todo title
  setEditTodo = (id, title) => {
    this.setState({editTodoId: id, newTodoTitle: title})
  }

  render() {
    const {todosList, newTodoTitle, editTodoId} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className="add-todo-container">
            <input
              type="text"
              value={newTodoTitle}
              onChange={this.onChangeNewTodoTitle}
              placeholder="Enter new todo"
              className="todo-input"
            />
            <button type="button" className="add-btn" onClick={this.addTodo}>
              {editTodoId ? 'Update Todo' : 'Add Todo'}
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                setEditTodo={this.setEditTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
