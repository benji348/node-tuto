const path = require('path')
console.log(path.sep)

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/firsttext.txt', 'utf8')
const second = readFileSync('./content/secondtext.txt', 'utf8')

console.log(first, second)


const resut = writeFileSync('./content/result-sync.txt', 'Here is the result :' + first + second, { flag: 'a' })