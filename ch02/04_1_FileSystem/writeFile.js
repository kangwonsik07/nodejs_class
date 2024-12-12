const fs = require('fs')

fs.writeFile('./weiteme.txt', '글이 입력됩니다', (err) => {
   if (err) {
      throw err
   }
   console.log('파일 쓰기 완료!')

   // 파일 작성 후 읽어오기
   fs.readFile('./weiteme.txt', (err, data) => {
      if (err) {
         throw err
      }
      console.log(data.toString())
   })
})
