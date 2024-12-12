const fs = require('fs').promises

fs.readFile('./readme.txt')
   .then((data) => {
      console.log(data)
      console.log(data.toString()) // 파일 출력
   })
   .catch((err) => {
      console.error(err)
   })
