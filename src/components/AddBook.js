import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/BookAction';
import { toast } from 'react-toastify';

const AddBook = () => {

  const history = useNavigate();

  const dispatch = useDispatch()

  const bookList = useSelector(state => state.bookReducer.bookList)

  const [bookData, setBookData] = useState({
    id: bookList.length + 1,
    name: '',
    image: '',
    author: '',
    description: ''
  })

  let { name, image, author, description } = bookData;

  let checkBook = bookList.find(book => book.name === name && name);
  let checkBookImage = bookList.find(book => book.image === image && image);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBookData({ ...bookData, [name]: value });
  }

  const clearBookData = () => {
    setBookData({
      id: '',
      name: '',
      image: '',
      author: '',
      description: ''
    });
  }

  const validateBookData = () => {
    if (!name || !author || !image || !description) {
      return toast.warning('Please Enter all fields')
    }

    if (checkBook) {
      return toast.error('This book already Exists!')
    }

    if (checkBookImage) {
      return toast.error('This book image already Exists!')
    }


    dispatch(addBook(bookData));
    clearBookData();
    toast.success(`${name} added successfully!`);
    history('/viewallbooks')
  }

  const handleBook = (e) => {
    e.preventDefault();
    validateBookData();
  }

  const resetData = () => {
    setBookData({
      name: '',
      image: '',
      author: '',
      description: ''
    })
  }

  return (
    <>
      <div className="row my-5 justify-content-center">
        <div className="col-md-4 text-center col-10 add-book bg-dark">
          <form className='my-4' onSubmit={handleBook}>
            <div className='mb-5'>
              <h1 className='text-light'>Add Book</h1>
            </div>

            <div className='mb-4'>
              <input type="text"
                className='form-control text-center'
                placeholder='Enter Book Name'
                name='name'
                value={name}
                onChange={handleInput}
              />
            </div>

            <div className='mb-4'>
              <input type="text"
                className='form-control text-center'
                placeholder='Enter Book Image'
                name='image'
                value={image}
                onChange={handleInput}
              />
            </div>

            <div className='mb-4'>
              <input type="text"
                className='form-control text-center'
                placeholder='Enter Book Author'
                name='author'
                value={author}
                onChange={handleInput}
              />
            </div>

            <div className='mb-5'>
              <input type="text"
                className='form-control text-center'
                placeholder='Enter Book Description'
                name='description'
                value={description}
                onChange={handleInput}
              />
            </div>

            <div className='my-4'>
              <Link className='btn btn-light' to={'/'}>Cancel</Link>
              <button className='btn btn-light mx-3' type='reset' onClick={resetData}>Reset</button>
              <button className='btn btn-light' type='submit'>Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBook