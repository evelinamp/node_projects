const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'R m'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Evelina'
user.age  = '26'
 
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)

