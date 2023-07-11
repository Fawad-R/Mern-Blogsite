import React, { createContext, useReducer } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Main from './Components/Main'
import About from './Pages/About'
import Blog from './Pages/Blog/Blog'
import AllBlogs from './Pages/Blog/AllBlogs'
import Contact from './Pages/Contact'
import './App.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Error from './Pages/Error'
import {initialState,reducer} from './Reducer/reducer'
import Upload from './Pages/Add new blogs/Upload'
let context1=createContext();
const App = () => {
  // let {state,dispatch}=useReducer(reducer,initialState);
  let {state,dispatch}=useReducer(reducer,initialState);
  return (
    <context1.Provider value={{state,dispatch}}>
    <div>
      <Navbar/>
      {/* <Header/> */}
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/allblogs' element={<AllBlogs/>} />
      <Route path='/contactus' element={<Contact/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/upload' element={<Upload/>} />
      <Route path='*' element={<Error/>} />
      <Route path='/error' element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
    </context1.Provider>
  )
}

export default App
export {context1};