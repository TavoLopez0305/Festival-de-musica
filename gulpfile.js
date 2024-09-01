//importar todo sobre la dependencia sass
import * as dartSass from 'sass'
//importa la funcion desde la dependencia gulp-sass
import gulpSass from 'gulp-sass'
//funcion src para acceder a la unicacion de los archivos
//funcion dest para almacenar los archivos procesados
//funcion watch para seguir escuchando cambios en el archivo
import {src, dest, watch} from 'gulp'


const sass =  gulpSass(dartSass)

export function css (done){
    src('src/scss/app.scss')
        .pipe( sass().on('error',sass.logError))//para dar control de la ejecucion de las funcion
        .pipe( dest('build/css'))
    done ()
}

//funcion watch para que la ejecucion se mantenga

export const dev = () =>{
    watch('src/scss/**/*.scss', css) // se le asigna busquedas globales en formato .scss
}