import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Components/Web/Home'
import Work from './Components/Web/Work'
import Contact from './Components/Web/Contact'

function App() {
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/work' element={<Work/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
