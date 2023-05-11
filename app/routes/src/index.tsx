import { FC } from 'react'
import { Route, Routes as DomRoutes } from 'react-router-dom'
import { Home } from '@pages/home'

export const Routes: FC = () => (
  <DomRoutes>
    <Route path='/' element={<Home />} />
  </DomRoutes>
)
