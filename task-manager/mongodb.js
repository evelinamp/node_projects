// CRUD create read update delete 

const mongodb = require('mongodb')
const MongoClient = mongodb.mongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect()

