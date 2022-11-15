import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import RecommendedBook from './RecommendedBook';

const RecommendBooks = () => {

  let recommenedBookList = useSelector(state => state.bookReducer.recommenedBookList);
  let bookLength = recommenedBookList.length;

  return (
    <div>
      {
        bookLength != 0 ? (
          <>
            <div className='row'>
              {
                recommenedBookList.map((book, i) => {
                  return (
                    <div className='col-lg-4 col-md-6 col-12 card-des my-5' key={i}>
                      <RecommendedBook bookData={book} />
                    </div>
                  )
                })
              }
            </div>
          </>
        ) : (
          <div style={{"height": "90vh","display":"flex", "justifyContent":"center", "alignItems":"center"}}>
            <div>
              <h1>No Book Found!</h1>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default RecommendBooks