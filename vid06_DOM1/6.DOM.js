console.log(document);

console.log(document.head);
console.log(document.title);

// METODOS DEL Document. 

xx1=`
Document.getElementsByClassName(String className)

Document.getElementsByTagName(String tagName)

Document.getElementById(String id)

Document.querySelector(String selector)

Document.querySelectorAll(String selector)

Document.createDocumentFragment()

Document.createElement(String name)
`


// getElementById :

// OPCIONES PARA INDICAR LA INCLUSION DE UN SCRIPT. (FILE)
/*


// -------------------------------------------------------------------------
// 1. con DOMContentLoader:
document.addEventListener("DOMContentLoaded", ()=>{

    console.log(document.getElementById("tituloWeb"));
    console.log(document.getElementById("tituloWeb").textContent );
    console.log(document.getElementById("tituloWeb").innerHTML );

});
*/


// -------------------------------------------------------------------------
// 2.con "defer"
// CON   defer en el head ===> <script defer src="./6.DOM.js"></script>  
// los script con defer siempre se ejecutan cuando el DOM esta listo. 
// y 'antes' del evento -> DOMContentLoaded.
//*** defer NO funciona igual en todos los navegadores
console.log('document.getElementById("tituloWeb")  :');
console.log(document.getElementById("tituloWeb"));
console.log('\n');

console.log('.textContent   :');
console.log(document.getElementById("tituloWeb").textContent );
console.log('\n');

console.log('.innerHTML  :');
console.log(document.getElementById("tituloWeb").innerHTML );
console.log('\n');

// -------------------------------------------------------------------------
// 3. incluir file antes del fin del body:
// PARECE LA MEJOR OPCION:
//
// Dejar la inclusion antes del fin del </body>
//    <script defer src="./6.DOM.js"></script>  
//    </body>


// -------------------------------------------------------------------------

console.log('document.querySelector("#tituloWeb")  :');
console.log( document.querySelector("#tituloWeb"));
console.log('\n');

console.log(`document.querySelector(".text-primary")`);
console.log( document.querySelector(".text-primary"));
console.log('\n');

console.log('console.log( document.querySelector("h1"));');
console.log( document.querySelector("h1"));
console.log('\n');


// ------------------------------
// QUERY SELECTOR / ALL 

// Selecciona el 1ro de todos :
// querySelector
console.log('----- querySelector()---------');

console.log( document.querySelector(".text-danger"));

// querySelectorAll : todos
// .container, los del container y no el del <p>
console.log('------ querySelectorAll() --------');
console.log( document.querySelectorAll(".container .text-danger") );


console.log('----- querySelector() con "id="tag"  ---------');
console.log( document.querySelector("#tag1"));



// querySelector/all()   vs getElementById()
// =========================================

// Eloquent Javascript: 
// preocuparse por la eficiencia puede ser una gran distraccion.
// poner en marcha las cosas y luego mejorarlo.



// PROPIEDADES DE UN ELEMENTO DEL DOM :

const h1 = document.getElementById("tituloWeb");

console.log( h1.className );
console.log( h1.id );
console.log( h1.style ); 
console.log( h1.tagName );
console.log( h1.textContent );

// Modificar propiedades

h1.textContent = "nuevo texto " ;
h1.style.backgroundColor = "white" ;
h1.style.color = "blue" ;


// ******** EVENTOS ************
console.log('--------- EVENTOS C BOTON --------------');

// Error .btn no va. no esta anidado
//const boton = document.querySelector(".btn .btn-primary");  //     OJO
const boton = document.querySelector(".btn-primary"); 
const boton1 = document.querySelector("#bot1");

console.log(boton);
console.log(boton1);

boton.addEventListener("click", ()=>{
    console.log("hiciste click !!!");
    h1.textContent ="Probando Eventos addEventListener!!!"
    h1.style.color = "yellow";
})












