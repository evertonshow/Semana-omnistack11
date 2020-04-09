const crypto = require('crypto')
const conection = require('../database/conection')

module.exports ={
    async index (req,res){
        const ongs = await conection('ongs').select('*')
    
        return res.json(ongs)
    },
    async create(req,res){
        const {name,email,whatsapp,city,uf} =req.body
    
        const id =crypto.randomBytes(4).toString('HEX')
    
        await conection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
        return res.json({ id })
    },
    async delete(req,res){
        const { name} = req.params
        const id = req.headers.authorization

        const ong = await conection('ongs')
        .where('id',id)
        .select('*')
        .first()

        if (ong.id!= id) {
            return res.status(401).json({erro: 'operation not permitted.' })
             }
             await conection('ongs').where('id',id).delete()

             return res.status(204).send()
    }
}
