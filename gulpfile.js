const {src,dest,watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done){

    src('src/scss/**/*.scss') // Identificar el archivo de SASS
        .pipe( sass() )     // Compilar
        .pipe(dest('build/css'));    // Almacenar

    done();
}

function dev(done){
    watch('src/scss/**/*.scss',css);
    done();
}

exports.css = css;
exports.dev = dev;