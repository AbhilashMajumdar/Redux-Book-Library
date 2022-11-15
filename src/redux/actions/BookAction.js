import { initialState } from "../states/BookState"

export const addBook = (bookData) => {
    let { id, name, image, author, description } = bookData;
    return {
        type: 'ADD_BOOK',
        payload: {
            id,
            name,
            image,
            author,
            description
        }
    }
}

export const deleteBook = (bookId) => {
    return {
        type: 'DELETE_BOOK',
        payload: {
            bookId
        }
    }
}

export const recommendedBook = (bookId) => {
    return {
        type: 'RECOMMENED_BOOK',
        payload: {
            bookId
        }
    }
}

export const removeBook = (bookId) => {
    return {
        type: 'REMOVE_BOOK',
        payload: {
            bookId
        }
    }
}

export const editBook = (bookData) => {
    let { id, name, image, author, description } = bookData;
    return {
        type: 'EDIT_BOOK',
        payload: {
            id,
            name,
            image,
            author,
            description
        }
    }
}