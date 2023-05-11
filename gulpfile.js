const {src,dest} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done){

    src('src/scss/app.scss') // Identificar el archivo de SASS
        .pipe( sass() )     // Compilar
        .pipe(dest('build/css'));    // Almacenar

    done();
}

exports.css = css;