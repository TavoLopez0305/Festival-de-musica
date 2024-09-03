document.addEventListener('DOMContentLoaded', function(){
    crearGallery()
})

const crearGallery = () =>{

        const gallery = document.querySelector('.gallery-imagenes')
        const Cantidad_img = 16

        for (let i = 1; i <= Cantidad_img; i++) {
            const imagen = document.createElement('IMG')
            imagen.src = `../src/img/Gallery/full/${i}.jpg`;
            imagen.alt = 'Imagen Galeria';

            //event Handler
            imagen.onclick = function(){
                mostrarImagen(i)
            }

            gallery.appendChild(imagen)

        }
}

const mostrarImagen = (i) =>{
    const imagen = document.createElement('IMG')
    imagen.src = `../src/img/Gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galeria';

    //generar boton de cierre de imagen
    const botonCierre = document.createElement('BUTTON')
    botonCierre.textContent =  'X'
    botonCierre.classList.add('boton_cierre')
    botonCierre.onclick = cerrarImagen

    const modal = document.createElement('DIV') // creamos el elemento 
    modal.classList.add('modal')
    modal.onclick = cerrarImagen

    //insertamos la imagen dentro del contenedor modal
    modal.appendChild(imagen)
    modal.appendChild(botonCierre)


    // Insertamos el elemento en el HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden') //creacion de clase para evidar el scroll 
    body.appendChild(modal) //funcion para agregarlo dentro de la equita body

    
}

const cerrarImagen = () =>{
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-Out')



    setTimeout(()=>{ //generar un retrazo para que entre la transicion en css
        modal?.remove() //esto quevale a hacer un if por ejemplo (pregunta por la exitencia de la clase)
        /*if(modal){
            modal.remove()
        }*/
        const body = document.querySelector('body')
        body.classList.toggle('overflow-hidden')

    },500)


}