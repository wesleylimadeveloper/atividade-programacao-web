const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Atividade de Programação Web III')
})

router.get('/games', (req, res) => {
    const sql = 'SELECT * FROM games'

    connection.query(sql, (error, results, fields) => {
        if(!error) {
            return res.send(results)
        } else {
            return res.send('Failed to bring data.')
        }
    })
})

router.get('/games/:id', (req, res) => {
    const { id } = req.params
    const sql = 'SELECT * FROM games WHERE id = ?'

    connection.query(sql, [id], (error, results, fields) => {
        if(!error) {
            return res.send(results)
        } else {
            return res.send('Failed to bring data.')
        }
    })
})

module.exports = router