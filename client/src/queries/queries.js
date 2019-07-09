import {gql} from 'apollo-boost';

const queries =  {
    getAuthorsQuery : gql`{
        authors{
            name 
            id
        }
    }`,

    getBooksQuery : gql`{
        books{
            name 
            id
        }
    }`,
    
        /* auguments with GQL datatypes*/
       
    addBookMutation : gql`
        mutation($name:String!, $genre :String!, $authorId:ID!){
            addBook(name:$name,genre:$genre,authorId:$authorId){ 
                name
                id
            }
        }`,

        getBookQuery : gql`
            query($bookId:String!){
                book(id:$bookId){
                    name
                    genre
                    id
                    author{
                        name
                        age
                        id
                        books{
                            name
                            id
                        }
                    }
                }

            }
        `
    
};

export {queries};