const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
   res.send('Hello,Express!')
})

app.listen(PORT, () => {
   console.log(`서버가 작동 중 입니다. http://localhost:${PORT}`)
})
