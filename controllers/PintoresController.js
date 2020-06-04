let mongoose = require('mongoose');

let pintores = require('../models/Pintores');

let PintoresController = {};

PintoresController.list = (req, res)=>{
    pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error: ', err);
            }
            res.render('../views/index', {
                pintores: pintor,
                titulo: "Listado de pintores",
                year : new Date().getFullYear()
            })
        })
};

module.exports = PintoresController;

