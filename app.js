const express = require('express')

// Main activity
const app = express()
app.use(express.static(path.join(__dirname)))

app.listen(80, () => {
    console.log('App listening on port 80')
})