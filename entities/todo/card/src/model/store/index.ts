import { createEvent, createStore } from 'effector'
import { Todo } from '../types'

export const appendTodo = createEvent<Omit<Todo, 'id'>>()
export const removeTodoById = createEvent<{ id: number }>()

export const $todos = createStore<Todo[]>([
  {
    id: 0,
    content: 'Hello, world!'
  }
])

$todos
  .on(appendTodo, (state, todo) => [...state, { ...todo, id: $nextTodoId.getState() }])
  .on(removeTodoById, (state, { id }) => state.filter(todo => todo.id !== id))

export const $nextTodoId = $todos.map(state => (state.at(-1)?.id ?? 0) + 1)
