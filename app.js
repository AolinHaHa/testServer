const express = require('express')
const app = express()
const port = 80

app.get('/api/test1', (req, res) => res.send('Hello World test1!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))