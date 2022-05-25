const mission = process.argv[2]
if(mission === 'learn') {
    console.log('Time to write some node.js code')
}else {
    console.log('is ' + mission + ' really more fun?')
}

function findmeaning() {
    return 42
}

console.log(findmeaning())
