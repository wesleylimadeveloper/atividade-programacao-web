const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.post('/games', (req, res) => {
    const { nome, ano, desenvolvedor } = req.body
    const sql = 'INSERT INTO games(nome, ano, desenvolvedor) VALUES(?, ?, ?)'

    connection.query(sql, [nome, ano, desenvolvedor], (error, results, fields) => {
        if(!error) {
            return res.send('Inserted succesful!')
        } else {
            return res.send('Insert failed.')
        }
    })
})

module.exports = router