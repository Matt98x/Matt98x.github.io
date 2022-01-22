var fs =require('fs')
var data = fs.readFileSync('../../tes.json')
var words = JSON.parse(data)
console.log(words)