const Hapi = require('hapi');
const routes = require('./routes');

const server = Hapi.server({
    port: 8545,
    host: 'localhost',
    app: {}
});

const iniciarServer = async () => {
    try {
        await server.register(routes);
        await server.start();
        console.log(`server en el puerto ${server.info.uri}`);
    } catch (error) {
        console.log('Error al iniciar el servidor')
    }
};

iniciarServer();