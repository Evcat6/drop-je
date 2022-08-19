import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, NotFoundPage, GitHub } from './pages'
import { Layout } from './components'
import { InputProvider } from './context/InputContext'


function App() {



  return (
        <InputProvider>
      <Routes>
      <Route path='/' element={ <Layout/> }>
      <Route index element={ <HomePage/> }/>
      <Route path='404' element={ <NotFoundPage/> }/>
      <Route path='*' element={ <Navigate to='404'/> }/>
      <Route path='git-hub' element={ <GitHub/> }/>
      </Route>
      </Routes>
      </InputProvider>
  )
}

export default App
