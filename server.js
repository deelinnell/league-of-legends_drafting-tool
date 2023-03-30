


const fs = require('fs')

const testFolder = './images/'
const championPortraits = []


fs.readdirSync(testFolder).forEach(file => {
    console.log(file)
})
