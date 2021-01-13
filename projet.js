console.log(process.argv)
if (process.argv[3] == "exit") {
    process.on('exit', function(code) {
        return console.log(`About to exit with code ${code}`);
    });
}

if (process.argv[3] == "transform") {
    const fs = require('fs')
    fs.readFile('movies.json', function(erreur, fichier) {
   let movies = JSON.parse(fichier)
   console.log(movies[1])
})
}