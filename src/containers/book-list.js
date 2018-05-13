import React, { Component } from 'react'

//Glue between react and redux
import { connect } from 'react-redux'

import { selectBook } from '../actions/index'

//Makes sure out actions flow to reducers
import { bindActionCreators } from 'redux'

//Cares about when the list of books changes
class BookList extends Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key = {book.title} className = "list-group-item">{book.title} </li>
            )
        })
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    //Whatever is returned will show up as props inside of BookList as this.props.books
    return {
        books: state.books
    }
}

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //Whenever selectBook is called, the result should be passed to all of
    //our reducers
    return bindActionCreators({selectBook : selectBook}, dispatch)
}

//Connect takes a function and a component and produces a container
//Container is a component that is aware of state in redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList)