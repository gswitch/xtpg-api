import { Router } from 'express';
import { authenticated } from './middlewares/security.js';
import { newUID, Unauthorized, Forbidden } from './commons.js';

const apiRoutes = Router();

let user;

apiRoutes.get('/version', (req, res) => {
    res.json({ version: '1.0.0' });
});

apiRoutes.post('/login', (req, res) => {
    try {
        const credential = req.body;

        if (credential.username !== 'MASTER' || credential.password !== '@xtpgui') {
            throw Unauthorized();
        }

        user = {
            id: newUID(),
            username: 'MASTER',
            name: 'MASTER ADMINISTRADOR',
            profile: 'ADMINISTRATOR',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
        };

        console.log('User:', user);

        res.json(user);
    } catch (err) {
        res.status(err.status).json({ message: err.message });
    }
});

apiRoutes.get('/logout', (req, res) => {
    try {

        if (user) {
            user = undefined;
        }
        
        res.json({ message: 'Usuário deslogado com sucesso!' });
    } catch (err) {
        res.status(err.status).json({ message: err.message });
    }
});

apiRoutes.get('/token', (req, res) => {
    try {
        const authorization = req.headers['authorization'];

        if (!user || !authorization) {
            throw Forbidden('Atenção! Não foi possível validar o token informado.');
        }

        const sid = authorization.split(' ')[1];

        if (!sid) {
            throw Forbidden('Atenção! Não foi possível validar o token informado.');
        }

        const userDTO = {
            id: user.id,
            name: user.name,
            username: user.username,
            profile: user.profile
        };

        res.json(userDTO);
    } catch (err) {
        res.status(err.status).json({ message: err.message });
    }
});


// Middlewares de Segurança
apiRoutes.use(authenticated);

// Rotas Protegidas
apiRoutes.get('/clientes', (req, res) => {
    res.json([]);
});


export {
    apiRoutes
};
