const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { descargarTutela } = require('../frontend/src/CrearTutela/descargarTutela');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({ extended : true }));
app.use(express.json({ type : "*/*" }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Funcionando');
});

app.post('/descargar', (req, res)=>{
    console.log(req.body);
    descargarTutela(req.body);
})

app.listen(app.get('port'), ()=>{
    console.log(`Conectado al puerto ${app.get('port')}`)
});