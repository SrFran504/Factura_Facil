const express = require('express');
const app = express();
const http=require('http');
const server=http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const multer = require('multer');



/*
Importar Rutas
*/

const userRoutes = require('./src/routers/userRoutes');


const port= process.env.PORT || 7000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./src/config/passport')(passport);

app.disable('x-powered-by');

app.set('port', port);

const upload = multer({
    storage: multer.memoryStorage()
});

/*
Llmado de las rutas
*/

userRoutes(app, upload);




server.listen(7000, '192.168.56.1' || 'localhost', function() {
    console.log('correo corriendo ' + process.pid + " "+port)
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Ruta tes');
});

//ERROR HANDLER
app.use((err, req, res, next) =>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

//200 - es un respuesta exitosa
//404 - url no existe
//500 - erro interno del servidor