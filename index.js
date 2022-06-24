const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const userRoutes = require('./src/routes/loterias')
const cors = require('cors')
const app = express()
const port = 9000


//Middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use(cors());


//Rutas
app.get('/',(req, res)=>{
    res.send('Hola Mundo');
});


//MongoDB Atlas
mongoose
    .connect(process.env.MONGO_URI,)
    .then(() => console.log('Se conecto a Mondo DB Atlas'))
    .catch((err) => console.error(err))

app.listen(port, () => console.log(`Server Arriba en la puerta ${port}`))
