const fs = require('fs').promises

fs.copyFile('readme4.txt', 'writema4.txt')
   .then(() => {
      console.log('복사완료')
   })
   .catch((error) => {
      console.error(error)
   })
