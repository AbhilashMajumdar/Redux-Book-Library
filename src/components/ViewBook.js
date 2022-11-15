import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound';


const ViewBook = () => {

    let bookId = useParams().id;

    let bookList = useSelector(state => state.bookReducer.bookList)
    let currentBook = bookList.find(book => book.id === parseInt(bookId));

    return (
        <div>
            {
                currentBook ? (
                    <>
                        <div className="row justify-content-center my-5">
                            <div className="col-lg-7 col-md-6 col-10 book-img">
                                <img src={currentBook.image} alt={currentBook.name} />
                            </div>

                            <div className="col-lg-3 col-md-8 col-10 text-center align-self-center mt-4">
                                <h2>{currentBook.name}</h2>
                                <h4>Author :- {currentBook.author}</h4>
                                <p>Description :- {currentBook.description}</p>
                                <div>
                                    <Link className='btn btn-dark' to={'/viewallbooks'}>Back to View All Books</Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <PageNotFound />
                )
            }
        </div>
    )
}

export default ViewBook