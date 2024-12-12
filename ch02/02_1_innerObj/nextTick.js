// 즉시실행

setImmediate(() => {
   console.log('Immediate')
})

process.nextTick(() => {
   console.log('nextTick')
})

setTimeout(() => {
   console.log('timeout')
}, 0)

Promise.resolve().then(() => console.log('Promise'))

// process.nextTick 은 setTimeout이나 setImmediate 보다 먼저 실행된다.
// Promise 객체도 setTimeout이나 setImmediate 보다 먼저 실행된다.
