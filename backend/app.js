import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import fetchUrlContent from './fetch-url-content.js';
import clean from './clean.js';
import count from './count.js';

const app=express()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express.static('frontend/build'))

app.post('/',async(req,res)=>{
    const url=req.body.url
    const content = await fetchUrlContent(url)
    const cleanContent=clean(content)
    const result=count(cleanContent)
    res.send(result)
})

export default app
