import express from 'express'
import bodyParser from 'body-parser'
import getAddress from './routes/getAddress.js'
import issueText from './routes/issueText.js'
import verifyText from './routes/verifyText.js'


const app = express()

// Parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', getAddress)
app.use('/', issueText)
 app.use('/', verifyText)



 app.listen(5001, ()=> console.log('Server is running on port: 5001'))


