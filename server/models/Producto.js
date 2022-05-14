const mongoose = require("mongoose");

const ProductoSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    categoria:{
        type: String,
        require: true
    },
    ubicacion:{
        type: String,
        require: true
    },
    precio:{
        type: Number,
        require: true
    },
    fechaDeCreacion:{
        type: Date,
        default: Date.now()
    },
});

const producto = mongoose.model("Producto", ProductoSchema)

module.exports = producto;