const graphql = require('graphql')
const _ = require('lodash') 

const {
  GraphQLObjectType, 
  GraphQLString, //Example:"1"
  GraphQLSchema,
  GraphQLID, //Example: "1" or 1 Note-JS still sees as string
  GraphQLInt,
  GraphQLList
} = graphql
//testing out graphql with booktype

//dummy data
var books = [
  {name:'Name of the Wind', genre:'Fantasy', id:'1', authorId: '1'},
  {name:'The Final Empire', genre:'Fantasy', id:'2', authorId: '2' },
  { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
  { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
  { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
  { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
]

var authors = [
  { name: 'Patrick Rothfuss', age: 44, id: '1' },
  { name: 'Brandon Sanderson', age: 42, id: '2'},
  { name: 'Terry Pratchett', age: 66, id: '3'}
]

const BookType = new GraphQLObjectType({
  name:'Book',
  fields: () => ({ // must wrap so it can be loaded
    id:{type:GraphQLID}, 
    name: {type: GraphQLString},
    genre:{type: GraphQLString},
    author: {type:AuthorType,//setup relationships
    resolve(parent,id){ //parents refers to the book object queried
      return _.find(authors,{id:parent.authorId})
      }
    }
  })
})

const AuthorType = new GraphQLObjectType({
  name:'Author',
  fields: () => ({ // must wrap so it can be loaded
    id:{type:GraphQLID}, 
    name: {type: GraphQLString},
    age:{type: GraphQLInt},
    books:{type:new GraphQLList(BookType), // because it is a list of books must use GraphQLList
      resolve(parent,args){
        return _.filter(books, {authorId:parent.id})
      }
    }
  })
})


const RootQuery = new GraphQLObjectType({ // this jumps into the graph
  name: 'RootQueryType',
  fields:()=>({
    book:{
      type: BookType, 
      args:{id:{type: GraphQLID}}, // this must match whatever type you set id to previously
      resolve(parent,args){// after you get a query it fires the resolve function
        //code to get data from db/other source
        return _.find(books,{id:args.id})
      }
    },
    author:{
      type: AuthorType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        return _.find(authors,{id:args.id})
      }
    }
  })
})

module.exports = new GraphQLSchema({
  query:RootQuery
})
