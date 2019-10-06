const jwt = require('jsonwebtoken')

//========================
// Verificar token
//========================

let verificaToken = (req, res, next) => {

    let token = req.get('token') //Authorization

    jwt.verify(token, process.env.SEEDD, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.usuario = decoded.usuario
        next() //Se debe llamar para que continue el flujo
    })

    /*
        res.json({
            token
        })
    */
}

//========================
// Verificar Admin Role
//========================

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario


    if (usuario.role === 'ADMIN_ROLE') {
        next()
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        })
    }

}


module.exports = {
    verificaToken,
    verificaAdminRole
}