import React from 'react'
import { useSelector } from 'react-redux';
import Book from './Book';

const ViewAllBooks = () => {

  const bookList = useSelector(state => state.bookReducer.bookList);

  return (
    <div className='row my-2'>
      {
        bookList.map((book, i) => {
          return (
            <div className='col-lg-4 col-md-6 col-12 card-des my-5' key={i}>
              <Book bookData={book} />
            </div>
          )
        })
      }
    </div>
  )
}

export default ViewAllBooks