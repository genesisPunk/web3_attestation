import express from 'express';
import mongoose from 'mongoose';
import getAddress from './routes/getAddress';
import issueText from './routes/issueText';
import verifyText from './routes/verifyText'

const app = express()

app.use('/', getAddress)
app.use('/', issueText)
app.use('/', verifyText)

mongoose.connect(CONNECTION_URL)
.then( () => app.listen(5000, ()=> console.log('Server is running on port: 5000')))
.catch(err => console.log(err.message))


