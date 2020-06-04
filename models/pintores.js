const mongoose = require('mongoose');

let  Schema = mongoose.Schema;

let pintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Necesitamos el nombre']
    },

    corriente:{
        type: String,
        required :  [true, 'Necesitamos la corriente']
    },

    nacionalidad:{
        type: String,
    },

    pintura:{
        type: String
    }

});

module.exports = mongoose.model('pintores', pintoresSchema);

