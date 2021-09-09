const express = require('express')
const connection = require('../util/database')
const router = express.Router()

router.delete('/games/:id', (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM games WHERE id = ${id}`

    connection.query(sql, (error, results, fields) => {
        if(!error) {
            return res.send('Deleted succesful!')
        } else {
            return res.send('Delete failed.')
        }
    })
})

module.exports = router