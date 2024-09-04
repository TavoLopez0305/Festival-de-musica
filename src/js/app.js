document.addEventListener('DOMContentLoaded', function(){
    navegacionfija()
    resaltarEnlace()
    crearGallery()
})
const navegacionfija = () =>{
    const header = document.querySelector('.header')
    const SobreFestival = document.querySelector('.sobre-festival')
    //window como objeto global
    window.addEventListener('scroll', function(){
        if(SobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    })

}
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

const resaltarEnlace = () =>{
    document.addEventListener('scroll', () =>{   // El código dentro de esta función se ejecuta cada vez que el usuario se desplaza (scrollea)
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')
        let actual = ""
        
        sections.forEach(section =>{

            const sectionTop = section.offsetTop // toma la distacia del elemento seleccionado con su elemento padre 
            const  sectionHeight = section.clientHeight // toma el tamaño de altura que tienen cada uno de los elemementos 
//window.scrollY indica la cantidad de píxeles que el contenido de la página se ha desplazado verticalmente.
            if(window.scrollY >= (sectionTop - sectionHeight /3)){
                actual = section.id

            }
            navLinks.forEach(link =>{
                link.classList.remove('active')
                if(link.getAttribute('href') === '#' + actual){
                    link.classList.add('active')
                }
            })
        })
    } )
 }



