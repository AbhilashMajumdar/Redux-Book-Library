import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteBook, recommendedBook } from '../redux/actions/BookAction';

const Book = (props) => {

    const dispatch = useDispatch();

    let recommenedBookList = useSelector(state=>state.bookReducer.recommenedBookList)

    let { id, name, image, author, description } = props.bookData;

    const addToRecommened = () => {
        // checking if the book is already added in recommended section or not
        
        if(recommenedBookList.length === 0){
            dispatch(recommendedBook(id))
            return toast.success(`${name} added in Recommened Books`)
        }

        let bookExist = recommenedBookList.find(book=>book.id === parseInt(id));
        if(!bookExist){
            dispatch(recommendedBook(id))
            return toast.success(`${name} added in Recommened Books`)
        }else{
            return toast.warning(`${name} already added in Recommened Books`)
        }
    }

    return (
        <div className="card">
            <img src={image} alt={name} className="card-img"/>
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <h6>Author :- {author}</h6>
                    <div className='mt-2'>
                        <NavLink className='btn btn-primary' to={`/viewbook/${id}`}>Check Book Details</NavLink>
                    </div>
                    <div className='my-2'>
                        <NavLink className='btn btn-warning' to={`/updatebook/${id}`}>Edit</NavLink>
                        <button className='btn btn-danger mx-3' onClick={()=>dispatch(deleteBook(id))}>Delete</button>
                    </div>
                    <div className='mb-2'>
                        <button className='btn btn-success' onClick={addToRecommened} >Add for Recommendation</button>
                    </div>
                </div>
        </div>
    )
}

export default Book