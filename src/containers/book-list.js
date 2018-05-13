import React, { Component } from 'react'

//Glue between react and redux
import { connect } from 'react-redux'



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

//Connect takes a function and a component and produces a container
//Container is a component that is aware of state in redux
export default connect(mapStateToProps)(BookList)