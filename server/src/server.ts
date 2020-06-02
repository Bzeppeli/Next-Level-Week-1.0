import express from 'express';
import path from 'path'
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());

//for default the express don't know this is a apiRest, then we need "say" that is a api using json format
app.use(express.json());

app.use(routes);
//express static is for statics files, as images, pdfs n etc
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);