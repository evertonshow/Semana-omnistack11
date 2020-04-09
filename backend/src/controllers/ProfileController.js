const conection = require('../database/conection')

module.exports = {
    async index (req,res){
    const ong_id = req.headers.authorization

    const incidents = await conection ('incidents')
    .where('ong_id',ong_id)
    .select('*')

    return res.json(incidents)
    }
}