//Importaciones de nodejs
const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/dbConnection');

class Server {

    constructor() {
        //Configuración inicial
        this.app = express();
        this.app.get('/', (req, res) => {
            res.send("PAGINA DE INICIO")
        })
        this.port = process.env.PORT;

        this.paths = {
            usuario:    '/api/usuario',
            descuento:  '/api/descuento',
            factura:    '/api/factura',
            categoria:  '/api/categoria',
            mesa:       '/api/mesa',
            pedido:     '/api/pedido',
            plato:      '/api/plato',
        }


        //Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();

    }

    //Función de conexión
    async conectarDB() {
        await dbConection();
    }

    //Un middleware es una función que se ejecuta antes de las rutas
    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del Body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));

    }


    routes() {
        this.app.use(this.paths.usuario , require('../routes/routesUsuario/usuarioRoutes'));
        this.app.use(this.paths.descuento , require('../routes/routesDescuento/descuentoRoutes'));
        this.app.use(this.paths.factura , require('../routes/routesFactura/facturaRoutes'));
        this.app.use(this.paths.categoria , require('../routes/routesCategoria/categoriaRoutes'));
        this.app.use(this.paths.mesa , require('../routes/routesMesa/mesaRoutes'));
        this.app.use(this.paths.pedido , require('../routes/routesPedido/pedidoRoutes'));
        this.app.use(this.paths.plato , require('../routes/routesPlato/platoRoutes'));
    }


    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        })
    }


}


//Importamos la clase Server
module.exports = Server;