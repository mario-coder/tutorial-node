const jwt = require('jsonwebtoken')

//========================
// Verificar token
//========================

let verificaToken = (req, res, next) => {

    let token = req.get('token') //Authorization

    jwt.verify(token, process.env.SEEDD, (err, decoded) => {

        if(err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.usuario = decoded.usuario
        next()  //Se debe llamar para que continue el flujo
    })

/*
    res.json({
        token
    })
*/


}


module.exports = { 
    verificaToken
}