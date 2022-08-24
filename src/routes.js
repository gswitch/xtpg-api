import { Router } from 'express';
import { authenticated } from './middlewares/security.js';

const apiRoutes = Router();

// Exibe Versão do Sistema
apiRoutes.get('/version', (req, res) => {
    res.json({ version: '1.0.0' });
});

// Rota de Autenticação
apiRoutes.get('/login', (req, res) => {
    res.json({ message: 'OK' });
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
