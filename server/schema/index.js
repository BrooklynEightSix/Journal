const graphql = require('graphql')
const _ = require('lodash') 
const Book = require('../models/book')
const Author = require('../models/author')

const {
  GraphQLObjectType, 
  GraphQLString, //Example:"1"
  GraphQLSchema,
  GraphQLID, //Example: "1" or 1 Note-JS still sees as string
  GraphQLInt,
  GraphQLList
} = graphql

const BookType = new GraphQLObjectType({
  name:'Book',
  fields: () => ({ // must wrap so it can be loaded in js creation phase
    id:{type:GraphQLID}, 
    name: {type: GraphQLString},
    genre:{type: GraphQLString},
    author: {type:AuthorType,//setup relationships
    resolve(parent,id){ //parents refers to the book object queried
      //return _.find(authors,{id:parent.authorId})
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
        // return _.filter(books, {authorId:parent.id})
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
        // return _.find(books,{id:args.id})
      }
    },
    author:{
      type: AuthorType,
      args:{id:{type:GraphQLID}},
      resolve(parent,args){
        // return _.find(authors,{id:args.id})
      }
    },
    books:{ // this is so we can get list of books or whatever type
      type: new GraphQLList(BookType),
      resolve(parent,args){
        return books
      }
    },
    authors:{
      type: new GraphQLList(AuthorType),
      resole(parent,args){
        return authors
      }
    }
  })
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      addAuthor: {
          type: AuthorType,
          args: {
              name: { type: GraphQLString },
              age: { type: GraphQLInt }
          },
          resolve(parent, args){
              let author = new Author({
                  name: args.name,
                  age: args.age
              });
              return author.save();
          }
      }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

