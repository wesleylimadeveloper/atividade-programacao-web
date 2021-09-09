const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.put('/games/:id', (req, res) => {
    const { id } = req.params
    const { nome, ano, desenvolvedor } = req.body
    const sql = `UPDATE games SET nome = ?, ano = ?, desenvolvedor = ? WHERE id = ${id}`

    connection.query(sql, [nome, ano, desenvolvedor], (error, results, fields) => {
        if(!error) {
            return res.send('Updated succesful!')
        } else {
            return res.send('Update failed.')
        }
    })
})

module.exports = router