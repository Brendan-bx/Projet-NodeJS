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


switch (process.argv[3]) {
    case ("transform"):
        let array = []
        let movies = require(process.argv[4])
        let fichierEcriture = process.argv[5];
        for (i = 0; i < movies.length; i++) {
            //console.log(movies[2].release_date)

            let date = new Date(movies[i].release_date * 1000);
            let Year = date.getFullYear();
            movies[i].title = movies[i].title + " " + "(" + Year + ")";
            writable(movies[i], fichierEcriture);
        }
        break;



}


function writable(fichierLEcture, fichierEcriture) {
    let writable = JSON.stringify(fichierLEcture, null, "\t");
    let fs = require('fs');
    fs.appendFileSync(fichierEcriture, writable);
};

let stop = new Date().getTime();
console.log("time : " + (stop - start));