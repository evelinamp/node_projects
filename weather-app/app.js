const request = require('request')

const url = 'https://api.darksky.net/forecast/6e95638bafb2b69bb954d24412264f85/37.8267,-122.4233'

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
    
})