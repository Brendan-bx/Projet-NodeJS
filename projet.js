const { title } = require('process');

console.log(process.argv)
if (process.argv[3] == "exit") {
    process.on('exit', function(code) {
        return console.log(`About to exit with code ${code}`);
    });
}



while ([19554]) {
if (process.argv[3] == "transform") {
    const fs = require('fs')
    fs.readFile('movies.json', function transform (erreur, fichier) {
    let movies = JSON.parse(fichier)
    //console.log(movies[2].release_date)
    
    let date = new Date (movies[1].release_date*1000);


    let donnees = JSON.stringify(`movies:${movies[1].title} (${date.getFullYear()}) release date : ${movies[1].release_date}`)
 
    fs.writeFile('movies.out.json', donnees, function(erreur) {
    if (erreur) {
        console.log(erreur)}

})
})
}}