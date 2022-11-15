import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { editBook } from '../redux/actions/BookAction';
import { toast } from 'react-toastify';
import PageNotFound from './PageNotFound';

const UpdateBook = () => {

  const history = useNavigate();

  const dispatch = useDispatch();

  let bookId = useParams().id;

  const [bookData, setBookData] = useState({
    id: '',
    name: '',
    image: '',
    author: '',
    description: ''
  })

  const bookList = useSelector(state => state.bookReducer.bookList)
  const currentBook = bookList.find((book) => book.id === parseInt(bookId))

  let {id, name, image, author, description } = bookData;

  const getInitialData = () => {
    if (currentBook ) {
      let { id, name, image, author, description } = currentBook;
      setBookData({
        id,
        name,
        image,
        author,
        description
      });
    }
  }

  useEffect(() => {
    getInitialData();
  }, [])

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setBookData({ ...bookData, [name]: value });
  }

  const clearBookData = () => {
    setBookData({
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

    console.log(bookData);

    dispatch(editBook(bookData));
    clearBookData();
    toast.success(`${name} updated successfully!`);
    history('/viewallbooks')
  }

  const updateBook = (e) => {
    e.preventDefault();
    validateBookData();
  }

  return (
    <>
      <div>
        {
          currentBook ? (
            <>
              <div className="row my-4 justify-content-center">
                <div className="col-md-4 text-center col-10 add-book bg-dark">
                  <form className='my-4' onSubmit={updateBook}>
                    <div className='mb-5'>
                      <h1 className='text-light'>Update Book</h1>
                    </div>

                    <div className='mb-4'>
                      <input type="text"
                        className='form-control text-center bg-secondary'
                        // placeholder='Enter Book Name'
                        name='id'
                        value={bookId}
                        readOnly
                      />
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
                      <Link className='btn btn-light' to={'/viewallbooks'}>Cancel</Link>
                      <button className='btn btn-light mx-3' type='reset' onClick={clearBookData}>Reset</button>
                      <button className='btn btn-light' type='submit'>Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            // <div style={{ "height": "90vh", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
            //   <div>
            //     <h1>No Book Found!</h1>
            //   </div>
            // </div>
            <PageNotFound />
          )
        }
      </div>
    </>
  )
}

export default UpdateBook