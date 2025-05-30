import express from 'express';
import cors from 'cors'
import cookieparser from 'cookie-parser'


const app = express();



app.use(express.json({
    limit: '20kb'
}));


app.use(cookieparser());


app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}));

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true,
    limit: '20kb'
}));




/// importing routes 

import ConsultantRouter from './routes/consultant.Routes.js';





// using routes
app.use('/api/v1/consultant', ConsultantRouter);

export default app;