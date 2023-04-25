import React from 'react'
import { Container } from './container'
import { store } from './features/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}