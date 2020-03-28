const conection = require('../database/conection')

module.exports = {
    async index (req,res){
    const ong_id = req.headers.authorization

    const incidents = await conection ('incidents')
    .where('ongs_id',ongs_id)
    .select('*')

    return res.json(incidents)
    }
}