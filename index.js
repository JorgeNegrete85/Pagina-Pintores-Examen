const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT || 3000;

let pintoresRouter = require('./routes/pintor');

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use('/', pintoresRouter);



app.get('/munch', (req, res)=>{
    res.render('edvard',{
        autor: 'Jorge  Negrete',
        year: new Date().getFullYear(),
        title : 'Munch Edvard',
        pintura: 'Algunas De Sus Pinturas'
    });
});

// archivo alberto durero
app.get('/durero', (req, res)=>{
    res.render('alberto',{
        autor: 'Jorge  Negrete',
        year: new Date().getFullYear(),
        title : 'Durero Alberto',
        pintura: 'Algunas De Sus Pinturas'
    });
});

// archivo pablo pedro rubnes
app.get('/rubens', (req, res)=>{
    res.render('pablo',{
        autor: 'Jorge  Negrete',
        year: new Date().getFullYear(),
        title : 'Rubens Pedro Pablo',
        pintura: 'Algunas De Sus Pinturas'
    });
});

// archivo gustave caillebotte
app.get('/caillebotte', (req, res)=>{
    res.render('gustave',{
        autor: 'Jorge  Negrete',
        year: new Date().getFullYear(),
        title : 'Caillebotte Gustave',
        pintura: 'Algunas De Sus Pinturas'
    });
});




mongoose.Promise = global.Promise;

const cadena = 'mongodb+srv://jorge85:superseo85@negretejorge-cvrur.azure.mongodb.net/cuarentena?retryWrites=true&w=majority'

mongoose.connect(cadena, {useNewUrlParser:true, useUnifiedTopology:true})

. then(()=>{
    console.log('conexion establecida');
}).catch(err=> console.log(err));

app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto ...');

});