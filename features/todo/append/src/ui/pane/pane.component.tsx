import { FC, useState } from 'react'
import { Row } from '@ui/layout'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import { appendTodo } from '@entities/todo-card'

export const Pane: FC = () => {
  const [content, setContent] = useState('')

  const isEmpty = content.length === 0

  function append() {
    appendTodo({ content })
    setContent('')
  }

  return (
    <Row gap='6px'>
      <Input value={content} onChange={({ target }) => setContent(target.value)} />
      <Button disabled={isEmpty} primary onClick={append}>Добавить</Button>
    </Row>
  )
}
