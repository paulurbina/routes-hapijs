module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
        server.route([
            {
                method: 'GET',
                path: '/',
                handler: async (req, res) => {
                    return 'Hola Noders!';
                }
            },
            {
                method: 'GET',
                path: '/usuarios/{nombre?}',
                handler: async (req, res) => {
                    const nombre = (req.params.nombre) ? req.params.nombre: 'invitado';
                    return `Hola ${nombre}`;
                }
            },
            {
                method: 'GET',
                path: '/usuarios',
                handler: async (req, res) => {
                    const users = {
                        nombre: req.body.nombre,
                        apellido: req.body.apellido
                    };
                    return res.response({
                        datos: users
                    }).type('application/json');
                }
            },
            {
                method: 'POST',
                path: '/usuarios',
                handler: async (req, res) => {
                    const newUser = {
                        nombre: req.payload.nombre,
                        apellido: req.payload.apellido
                    };
                    return res.response({
                        datos: newUser
                    }).type('application/json');
                }
            },
            {
                method: 'PUT',
                path: '/usuarios/{id}',
                handler: async (req, res) => {
                    const newUser = {
                        nombre: req.payload.nombre,
                        apellido: req.payload.apellido
                    };
                    return res.response({
                        datos: newUser,
                        mensaje: `Usuario ID: ${req.params.id} modificado exitosamente!`
                    }).type('application/json');
                }
            },
            {
                method: 'DELETE',
                path: '/usuarios/{id}',
                handler: async (req, res) => {
                    return res.response({
                        mensaje: `Usuario con ID: ${req.params.id} eliminado exitosamente!`
                    }).type('application/json');
                }
            }
        ]);
    }
}