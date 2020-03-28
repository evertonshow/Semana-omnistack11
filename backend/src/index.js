/*
*rota/recurso
 */
/**
 * Métodos Http
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Delaar uma informação no back-end
 **/
/**
 * Tipos de parãmetros :
 * Query Params: Parãmetros nomeadosmna rota após '?'(Filtros, paginação)
 * Route Params: Parãmetros utilizados para identificar recursos 
 * Requert Body: Corpo da requisição ,utilizado para criar ou alterar recursos 
 */
/**
 * Sql : Mysql, Sqlite, PostgreSql, Oracle, microsoft Sql Server
 * NoSql: MongoDB, CounchDB e etc
 */
/**
 * Driver: SELECT * FROM  users
 * Query Builder: Table ('users'), select('*').where()
 */
const express = require('express')
const cors = require('cors') 
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json()) 
app.use(routes)

app.listen(3333)


