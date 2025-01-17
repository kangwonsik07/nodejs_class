const fs = require('fs').promises

fs.writeFile('./weiteme.txt', '글이 입력됩니다')
   .then(() => {
      console.log('파일 쓰기 완료!')
      // 작성한 파일 바로 읽기
      return fs.readFile('./weiteme.txt')
   })
   .then((data) => {
      console.log(data.toString())
   })
   .catch((err) => {
      console.log('파일 처리 중 오류 발생:', err)
   })
