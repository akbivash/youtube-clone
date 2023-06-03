import { Request, Response } from 'express';
const express = require('express')
const videosRoute = require('./routes/videos')
const channelsRoute = require('./routes/channels')
const searchRoute = require('./routes/search')
const categoriesRoute = require('./routes/categories')
const cors = require('cors')
const app = express();
require('dotenv').config('./env')

let corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials:true
}
app.use(cors(corsOptions))

const PORT = 5000;
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ msg: 'Welcome to the backend' });
});


app.use('/api/v1/videos', videosRoute)
app.use('/api/v1/channels',channelsRoute )
app.use('/api/v1/search', searchRoute)
app.use('/api/v1/categories', categoriesRoute)
app.use('/*' , (req:Request, res:Response) => res.send('Please try a good endpoint'))

app.listen(PORT, () => {
    console.log('Server is running');
});
