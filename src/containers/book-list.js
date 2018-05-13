import React, { Component } from 'react'
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
    
}