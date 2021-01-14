const { title } = require('process');
let start = new Date().getTime();

console.log(process.argv)
if (process.argv[3] == "exit") {
    process.on('exit', function (code) {
        return console.log(`About to exit with code ${code}`);
    });
}

const fs = require('fs');
const { domainToUnicode } = require('url');
let donnees;
let array = []
//let test= 0;


if (process.argv[3] == "transform") {




    function writable(fichier,) {
        let writable = JSON.stringify(array, null, "\t");
        fs.appendFileSync(fichier, writable);
    }


    fs.readFile('movies.json', function transform(erreur, fichier) {
        for (i = 0; i < 5; i++) {
            let movies = JSON.parse(fichier)
            //console.log(movies[2].release_date)

            let date = new Date(movies[i].release_date * 1000);


            donnees = `movies:${movies[i].title} (${date.getFullYear()}) release date : ${movies[i].release_date}`


            console.log(donnees);
            array.push(donnees);
            console.log(i);
            writable('movies.out.json')

        }



    })

}
let stop = new Date().getTime();
console.log("time : " + (stop - start));