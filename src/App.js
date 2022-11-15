import React from 'react'
import './App.css'
import './Responsive.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddBook from './components/AddBook'
import Home from './components/Home'
import Navbar from './components/Navbar'
import PageNotFound from './components/PageNotFound'
import SearchBook from './components/SearchBook'
import UpdateBook from './components/UpdateBook'
import ViewAllBooks from './components/ViewAllBooks'
import { ToastContainer } from 'react-toastify'
import ViewBook from './components/ViewBook'
import RecommendBooks from './components/RecommendBooks'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/viewallbooks' element={<ViewAllBooks />} />
          <Route path='/viewbook/:id' element={<ViewBook />} />
          <Route path='/updatebook/:id' element={<UpdateBook />} />
          <Route path='/searchbook' element={<SearchBook />} />
          <Route path='/recommendbook' element={<RecommendBooks />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App