const gql = require('apollo-server-express').gql;

const TYPEDEFS = gql`
type geo{
    lat: Float,
    lng: Float
  }
  type company{
    name: String
    catchPhrase: String
    bs: String
  }
  type address{
    street: String
    suite: String
    city: String
    zipcode: String
    geo: geo
  }
  type user{
    id: Int
    name: String
    username: String
    email: String
    address: address
    phone: String
    website: String
    company: company
  }
  type Query{
    user(id:Int!): user
    allUser: [user]
  }
  `;
module.exports = TYPEDEFS;
