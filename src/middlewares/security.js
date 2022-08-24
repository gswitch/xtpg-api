import { checkToken, Unauthorized } from '../commons.js';

export async function authenticated(req, res, next) {
    try {
        const authorization = req.headers['authorization'];
        
        if (!authorization) {
            throw Unauthorized();
        }
        
        const partsToken = authorization.split(' ');
        const prefixToken = partsToken[0].trim();
        const hashToken = partsToken[1].trim();
        
        if ((!prefixToken || prefixToken !== 'Bearer') || !hashToken) {
            throw Unauthorized();
        }
        
        req.user = await checkToken(hashToken);

        if (!req.user || !req.user.id) {
            throw Unauthorized();
        }

        // await userService(req).findGroupsAndPermissions(req.user);

        next();
    } catch (err) {
        return res.status(err.status).json({ message: err.message });
    }
}

export default {
    authenticated,
}
