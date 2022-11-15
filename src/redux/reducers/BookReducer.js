import { initialState } from "../states/BookState"

const bookReducer = (state = initialState, action) => {
    if (action.type === 'ADD_BOOK') {
        let { id, name, image, author, description } = action.payload;
        return {
            ...state,
            bookList: [
                ...state.bookList,
                {
                    id,
                    name,
                    image,
                    author,
                    description
                }
            ]
        }
    } else if (action.type === 'DELETE_BOOK') {
        let { bookId } = action.payload;
        let newBookList = state.bookList.filter(book => book.id !== parseInt(bookId))

        return {
            ...state,
            bookList: newBookList
        }
    } else if (action.type === "RECOMMENED_BOOK") {
        let { bookId } = action.payload;
        let recommenedBookList = state.bookList.find(book => book.id === parseInt(bookId))

        return {
            ...state,
            recommenedBookList: [...state.recommenedBookList, recommenedBookList]
        }
    } else if (action.type === 'REMOVE_BOOK') {
        let { bookId } = action.payload;
        let newRecommenedBookList = state.recommenedBookList.filter((book) => book.id !== parseInt(bookId));

        return {
            ...state,
            recommenedBookList: newRecommenedBookList
        }
    } else if (action.type === 'EDIT_BOOK') {
        let { id, name, image, author, description } = action.payload;
        let updatedBookList = state.bookList.map((book) => book.id === parseInt(id) ? action.payload : book)
        // console.log(updatedBookList);
        return {
            ...state,
            bookList: updatedBookList
        }
    } else {
        return state
    }
}

export default bookReducer