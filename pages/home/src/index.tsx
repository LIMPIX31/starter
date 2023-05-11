import { type FC } from 'react'
import { Layout } from '@ui/layout'
import { TodoList } from '@widgets/todo-list'

export const Home: FC = () => (
  <Layout alignItems='center' justifyContent='center' height='100vh'>
    <TodoList />
  </Layout>
)
