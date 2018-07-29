import { gql } from 'apollo-boost'

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

const login = gql`
  mutation Login($username: String!, $password: String!){
        login(username:$username, password:$password){
            id
            username
            firstName
            lastName
        }
    }
`

// we can use AddBook name or not
// we must tell it the TYPE, e.g. String!
const addBookMutation = gql`
mutation AddBook($name:String!, $genre:String!, $authorId: ID!){
    addBook(name:$name, genre:$genre, authorId:$authorId)
    {
        author{
            name
            id
        }
    }
}
`
export { getAuthorsQuery, getBooksQuery , addBookMutation, login}
