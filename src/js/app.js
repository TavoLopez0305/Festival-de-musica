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

            gallery.appendChild(imagen)

        }
}