const { readFile, writeFile } = require('fs')

readFile('./content/firsttext.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error)
        return
    } else {
        console.log(result)
    }
})