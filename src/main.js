// const express = require('express');
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send(`[OK] Servidor executando na porta ${port}!`);
});

app.listen(port, () => {
    console.log(`[OK] Servidor executando na porta ${port}.`);
});
