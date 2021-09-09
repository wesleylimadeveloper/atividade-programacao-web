const express = require('express')
const create = require('./src/routes/create')
const read = require('./src/routes/read')
const update = require('./src/routes/update')
const del = require('./src/routes/delete')
const app = express()
const port = 3000

app.use(express.json())
app.use(create)
app.use(read)
app.use(update)
app.use(del)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})