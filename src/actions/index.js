export function selectBook(book) {
    //selectBook is an action creator, it needs to return an action
    //an action is an object with a type property and sometimes a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

