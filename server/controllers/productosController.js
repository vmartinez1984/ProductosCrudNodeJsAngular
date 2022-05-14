const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    //console.log(req.body)
    try{
        producto = new Producto(req.body);
        await producto.save();

        res.status(201).json({ _id : producto._id})
    }catch(error){
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
}

exports.obtenerPorId = async (req, res) => {
    try{
        item = await Producto.findById(req.params.id);

        if(!item)
        res.status(404).json( {mensaje : "No se encontro el producto"})

        res.status(200).json(item)
    }catch(error){
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
}

exports.borrar = async (req, res) => {
    try{
        item = await Producto.findById(req.params.id);

        if(!item)
            res.status(404).json( {mensaje : "No se encontro el producto"})
        await Producto.findOneAndRemove({_id: req.params.id})
        
        res.status(200).json({mensaje : "Producto eliminado"})
    }catch(error){
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
}

exports.obtener = async (req, res) => {
    try{
        lista = await Producto.find();

        res.status(200).json(lista)
    }catch(error){
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
}

exports.actualizar = async (req, res) => {
    console.log("actualizar")
    try{
        const { nombre, categoria,  ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto)
            res.status(404).json( {mensaje : "No se encontro el producto"})
        
        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        await Producto.findOneAndUpdate({_id: req.params.id},producto,{new: true})

        res.status(200).json({mensaje: "Producto actualizado"})
    }catch(error){
        console.log(error);
        res.status(500).send("Ocurrio un error");
    }
}