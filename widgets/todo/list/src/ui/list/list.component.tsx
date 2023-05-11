import { FC } from 'react'
import { useStore } from 'effector-react'
import { $todos, TodoCard } from '@entities/todo-card'
import { Layout } from '@ui/layout'
import { RemoveTodoButton } from '@features/remove-todo'
import { AppendTodoPane } from '@features/append-todo'

export const List: FC = () => {
  const todos = useStore($todos)

  return (
    <Layout gap='12px' flexDirection='column'>
      <AppendTodoPane />
      {todos.map((todo, idx) => (
        <TodoCard
          ord={idx}
          content={todo.content}
          actions={[<RemoveTodoButton id={todo.id} key='remove' />]}
          key={todo.id}
        />
      ))}
    </Layout>
  )
}
