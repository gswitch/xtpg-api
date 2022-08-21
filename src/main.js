import compression from 'compression';
import express from 'express';
import path from 'path';
import cors from 'cors';

const port = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*', methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', credentials: true }));
app.use(express.json({ limit: '50mb', extended: true }));
app.use(compression());
app.use('/statics', express.static(path.resolve('./public')));

app.get('/', function(req, res) {
    res.send(`[OK] Servidor executando na porta ${port}!`);
});

app.listen(port, () => {
    console.log(`[OK] Servidor executando na porta ${port}.`);
});
