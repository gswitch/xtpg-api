export { default as moment } from 'moment';
export { default as fs } from 'fs-extra';
export { default as path } from 'path';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

export function NewError(message, status) {
    const err = new Error(message);
    err.status = status || 500;
    return err;
}

export function Unauthorized(message) {
    const err = new Error(message || 'Desculpe! Sua credencial não foi autorizada.');
    err.status = 401;
    return err;
}

export function Forbidden(message) {
    const err = new Error(message || 'Sua credencial não tem permissão para acessar a área solicitada!');
    err.status = 403;
    return err;
}

export function BadRequest(message) {
    const err = new Error(message || 'Ocorreu um erro inesperado!');
    err.status = 400;
    return err;
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function newUID() {
    return uuidv4();
}

export function newToken(data) {
    return jwt.sign(data, key, {
        expiresIn: '150 days'
    });
}

export async function checkToken(token) {
    return new Promise((resolve) => {
        jwt.verify(token, key, (err, user) => {
            if (err) {
                return resolve(null);
            }
            return resolve(user);
        });
    });
}

export default {
    newToken,
    checkToken,
}
