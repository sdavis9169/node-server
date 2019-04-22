const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

let nums = [1,2,3,4,5];
let createNums;

app.use(cors())
app.use(bodyParser.json())


/////////////// data that comes through the request must be a parameter or query ///////////////////
app.get('/api/numbers', (request, response, next)=>{
    response.send(nums)
})

app.delete('/api/num', (request, response, next)=>{
    nums = nums.filter((e)=>{
        return e !== Number(request.query.num)
    })
    response.send(nums)
})

/////////////// data that comes through the request can be a parameter, query or body object ///////////////////

app.post('/api/numbers', (request, response, next)=>{
    createNums = request.body.nums;
    response.send(createNums)
})

app.put('/api/numbers', (request, response, next)=>{
    nums.push(request.body.num);
    response.send(nums)
})

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})