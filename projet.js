const { title, argv } = require('process');
let start = new Date().getTime();

console.log(process.argv)
if (process.argv[3] == "exit") {
    process.on('exit', function (code) {
        return console.log(`About to exit with code ${code}`);
    });
}

const fs = require('fs');
const { domainToUnicode } = require('url');
//let test= 0;
let date;
let Year;
let array = []
let movies;
let fichierEcriture;

switch (process.argv[3]) {
    case ("transform"):
        movies = require(process.argv[4])
        fichierEcriture = process.argv[5];
        for (i = 0; i < movies.length; i++) {
            //console.log(movies[2].release_date)
            date = new Date(movies[i].release_date * 1000);
            Year = date.getFullYear();
            movies[i].title = movies[i].title + " " + "(" + Year + ")";
            writable(movies[i], fichierEcriture);
        }
        break;


    case ("sort_date"):
        movies = require(process.argv[4])
        fichierEcriture = process.argv[5];
        for (i = t.length - 1; i >= 1; i--) {
            for (j = 0; j <= i - 1; j++) {
                date = new Date(movies[i].release_date * 1000);
                Year = date.getFullYear();
                if (t[j + 1] < t[j]) {
                    let tmp = t[j];
                    t[j] = t[j + 1]
                    t[j + 1] = tmp

                }
                movies[i].title = movies[i].title + " " + "(" + Year + ")";
                writable(movies[i], fichierEcriture);
            }


        }

        break;



}


function writable(fichierLEcture, fichierEcriture) {
    let writable = JSON.stringify(fichierLEcture, null, "\t");
    let fs = require('fs');
    fs.appendFileSync(fichierEcriture, writable);
};

let stop = new Date().getTime();
console.log("temps d'éxécution : " + (stop - start) + " ms ");




