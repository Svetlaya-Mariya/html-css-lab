/*import pkg from 'gulp';
const { src, dest, task} = pkg;
import {} from 'gulp-rename';
/*import sassProp from 'gulp-sass';
const {sass} = sassProp; */
let gulp = require('gulp');
let rename = require('gulp-rename');
let sass = require('gulp-sass')(require('sass'));

function sassStyle(done){
    gulp.src('./app/assets/sсss/style.scss')
        .pipe(sass({
            errorLogToConsole: true
        }))
        .on('error', console.error.bind(console))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./app/assets/css/'));

    done();
}

gulp.task(sassStyle);
