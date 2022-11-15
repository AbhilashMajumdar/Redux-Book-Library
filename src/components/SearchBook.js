import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Book from './Book';

const SearchBook = () => {

  let [searchBook, setSearchBook] = useState('');

  let bookList = useSelector(state => state.bookReducer.bookList);
  console.log(bookList);

  return (
    <>
      <div className="row justify-content-center my-5">
        <div className="col-md-4">
          <input type="text"
            className='form-control text-center'
            placeholder='Enter Book Name to Search ...'
            value={searchBook}
            onChange={(e) => setSearchBook(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        {
          bookList.filter((book) => {
            let name = book.name.toLowerCase();
            if (searchBook === '') {
              return book
            } else if (name.includes(searchBook.toLowerCase())) {
              return book
            }
          }).map((book, i) => {
            return (
              <div className='col-lg-4 col-md-6 col-12 card-des' key={i}>
                <Book bookData={book} />
              </div>
            )
          }
          )
        }
      </div>
    </>
  )
}

export default SearchBook