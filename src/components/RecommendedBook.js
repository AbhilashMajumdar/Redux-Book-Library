import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeBook } from '../redux/actions/BookAction';

const RecommendedBook = (props) => {
    const dispatch = useDispatch();

    let { id, name, image, author, description } = props.bookData;

    return (
        <div className="card">
            <img src={image} alt={name} className="card-img" />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <h6>Author :- {author}</h6>
                <div className='my-4'>
                    <button className='btn btn-dark' onClick={()=>dispatch(removeBook(id), toast.success(`${name} removed from Recommened Books`))}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default RecommendedBook