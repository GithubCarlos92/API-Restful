const express = require('express');
const app = express();
const morgan = require('morgan');


//configuraciones
app.set('port', process.env.PORT || 3000); //en caso hay un puerto definido lo toma o por defecto 30000


//middlewares
app.use(morgan('dev'));//funcion que procesa datos antes que el servidor lo reciba
app.use(express.urlencoded({extended:false}));//entender los datos que vienen de input de formularios
app.use(express.json());//le permite al servidor entender formatos json

//rutas
app.use(require('./routes/indexr'));

//Iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});


