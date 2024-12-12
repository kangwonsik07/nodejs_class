// buffer로 읽었을때 메모리를 얼마나 사용하는지 확인
const fs = require('fs')

// 현재 메모리 사용량 확인
console.log('before:', process.memoryUsage().rss) //rss -프로세스가 사용 중인 메모리

const readStream = fs.createReadStream('./big.txt') //파일을 동기적으로 읽기
const writeStream = fs.createWriteStream('./big3.txt', readStream)

readStream.pipe(writeStream)

// 파일 읽기, 쓰기 작업후 메모리 사용량 다시 확인
readStream.on('end', () => {
   console.log('buffer:', process.memoryUsage().rss) //메모리 사용량이 28mb만 사용
})
