import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {queries} from '../queries/queries';

class BookDetails extends Component{
    displayBookDetails(){
        const {book} = this.props.data;
        console.log(book);
        if(book){
            return(
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All books by {book.author.name}</p>
                    <ul className="other-books">
                       {
                            book.author.books.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })
                       }
                    </ul>
                </div>
            );
        }else{
            return(
                <div> 
                    <p>No book selected</p>
                </div>
            );
        }
    }
    render(){
        //console.log(this.props);
        return(
            <div id="book-details">
                {this.displayBookDetails()}
            </div>
        );
    }   
}

export default graphql(queries.getBookQuery,{
    options:(props) => {
        return{
            variables: {
                bookId: props.bookId
            }
        }
    }
})(BookDetails);