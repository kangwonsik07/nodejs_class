import { odd, even } from './ment.mjs'

function checkOddEven(num) {
   if (num % 2 === 0) {
      return even
   } else {
      return odd
   }
}

// 함수를 모듈로 내보냄
export default checkOddEven
