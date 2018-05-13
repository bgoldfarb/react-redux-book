import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'


//keys passed in to combineReducers ends up as a key in the global state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
