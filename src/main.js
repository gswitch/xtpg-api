import compression from 'compression';
import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import { apiRoutes } from './routes.js';

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', credentials: true }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(compression());

app.use('/', (req, res, next) => {
    if (req.method === 'GET' && (req.originalUrl === '/' || req.originalUrl === '/index.html')) {
        return goHome(req, res);
    }
    next();
});

app.use(express.static(path.resolve('./public')));
app.use('/api', apiRoutes);

app.use('/*', goHome);

function goHome(req, res) {
    let htmlFile = fs.readFileSync(path.resolve('./public/index.html'), 'utf8');
    htmlFile = htmlFile.replace('__API__', `${req.protocol}://${req.headers.host}`);
    res.send(htmlFile);
}

app.listen(port, () => {
    console.log(`[OK] Servidor executando na porta ${port}.`);
});
