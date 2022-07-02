// website : youtube : bluuweb
// App proyecto del tutorial   
// Javascript #13: POO (Programación orientada a objetos)
// 

// console.log('funcionando');

// seleccionar el formulario con :
// querySelector    o GetElementById()
// -----------------------------------------------------------
const formulario       = document.querySelector("#formulario")

const cardsEstudiantes = document.querySelector("#cardsEstudiantes")
const cardsProfesores  = document.querySelector("#cardsProfesores")
// templates 
const templateEstudiante =     
document.querySelector("#templateEstudiante").content;
const templateProfesor = document.querySelector("#templateProfesor").content;
//
const alert = document.querySelector(".alert");

// Array para estudiantes:
const estudiantes = []
const profesores = []
// -----------------------------------------------------------


// -----------------------------------------------------------
document.addEventListener("click", (e) => {

    console.log( e.target.dataset.nombre );                         // disp
    if( e.target.dataset.nombre) {
        console.log( e.target.matches(".btn-success"));             // disp
        // BOTON Aprobar:
        if( e.target.matches(".btn-success") ){
            estudiantes.map( item =>{
                // usar el dataset.
                if( item.nombre === e.target.dataset.nombre ){
                    item.setEstado = true ;
                }
                console.log(item);                                  // disp
                return item ;                   
            }); // map
            //Persona.pintarPersonaUI( estudiantes, "Estudiante");
        }// if matches
        // BOTON Reprobar:
        if( e.target.matches(".btn-danger")){
            estudiantes.map( item =>{
                // usar el dataset.                
                if( item.nombre === e.target.dataset.nombre ){
                    item.setEstado = false ;
                }
                console.log(item);                                      // disp
                return item ;
            }); // map
        } // matches .btn-danger
        Persona.pintarPersonaUI( estudiantes, "Estudiante");

    }// if

})// document.addEventListener("click", (e) => {
// ======================================================================


// ======================================================================
formulario.addEventListener('submit', e =>{


    // FORMULARIO : ------------------------------------------------------
    e.preventDefault()
    const datos = new FormData(formulario)
    // test
    //console.log([...datos.values()]);
    const [nombre, edad, opcion] = [...datos.values()]
    //console.log( nombre, edad, opcion )
    // -------------------------------------------------------------------

     
    // INSTANCIAR class Estudiante
    //
    if (opcion === "Estudiante"){
        //
        const _estudiante = new Estudiante(nombre, edad)
        //console.log(_estudiante);                            // display
        estudiantes.push( _estudiante );
        //
        Persona.pintarPersonaUI( estudiantes, opcion )
        //console.log( estudiantes );                          // disp
        //
    } else if ( opcion === "Profesor" ){

        const profesor = new Profesor(nombre, edad);
        profesores.push(profesor);
        Persona.pintarPersonaUI( profesores, opcion);

    }

});
// ======================================================================


// ======================================================================
class Persona {

    constructor( nombre, edad ) {
      this.nombre = nombre
      this.edad = edad
    }

    // static puede accederse SIN Instanciar la clase.
    static pintarPersonaUI( personaS, tipo) {

      if( tipo === "Estudiante" ){
          
          // INICIALIZAR cardsEstudiantes
          cardsEstudiantes.textContent ="";
          // CREAR "fragment"
          const fragment = document.createDocumentFragment();
          // SCAN array "personaS"
          
          personaS.forEach( item => {
            fragment.appendChild( item.agregarNuevoEstudiante() )
          })
          // CARGAR fragment
          cardsEstudiantes.appendChild( fragment );
          //console.log("CardsEst --->", cardsEstudiantes.textContent );                      // disp
          
           
      }//if
       
      if (tipo === "Profesor") {

          cardsProfesores.textContent = "";
          const fragment = document.createDocumentFragment();
          personaS.forEach((item) => {
              fragment.appendChild( item.agregarNuevoProfesor() );
          });
          cardsProfesores.appendChild( fragment );
          //console.log( "CardsProfes---->", cardsProfesores.textContent );                       // disp
           
      }// if 
       
    }// static pintarPersonaUI

}// Persona.
// ======================================================================
  


// ======================================================================
class Estudiante extends Persona {

    #estado = false;
    #estudiante = "Estudiante";
    //
    set setEstado( p_estado ) {
      // #=private
      this.#estado = p_estado;
    }
    // 
    get getEstudiante(){
      return this.#estudiante; 
    }
    //
    agregarNuevoEstudiante(){

        //CLONAR      templateEstudiante
        const clone = templateEstudiante.cloneNode(true);
        clone.querySelector(".text-primary").textContent = this.nombre;
        clone.querySelector("h6").textContent = this.getEstudiante;
        clone. querySelector(".lead").textContent = this.edad;
        //console.log("clone -> ", clone);

        if( this.#estado) {
            clone.querySelector('.badge').className = "badge bg-success" 
            //clone.querySelector('.badge').textContent ="Aprobado"
            // *** USAR toogle mejor 
            clone.querySelector('.btn-success').disabled = true ;
            clone.querySelector('.btn-danger').disabled = false;
        }else{
            clone.querySelector('.badge').className = "badge bg-warning" 
            //clone.querySelector('.badge').textContent ="Reprobado"
            clone.querySelector('.btn-danger').disabled = true;
            clone.querySelector('.btn-success').disabled = false ;
        }
        
        /*clone.querySelector(".badge").textContent =
            this.#estado ? "Aprobado":"Reprobado"  ;*/
        clone.querySelector(".badge").textContent = this.#estado
            ? "Aprobado"
            : "Reprobado";    
            
        //console.log("CLONE=> ",clone);       
        
        // ID con dataset p capturar el ev click del boton
        // aprobar o del Reprobar.
        // .nombre es un ID
        // OJO, la clase lleva punto (.btn)
        clone.querySelector(".btn-success").dataset.nombre=this.nombre ;
        clone.querySelector(".btn-danger").dataset.nombre = this.nombre ;
            
        return clone;

    } // agregarNuevoEstudiante(){


}// class Estudiante.
// ======================================================================



// ======================================================================
class Profesor extends Persona {
  #profesor = "Profesor";

  agregarNuevoProfesor(){

      const clone = templateProfesor.cloneNode(true);
      clone.querySelector('h5').textContent = this.nombre;
      clone.querySelector('h6').textContent = this.#profesor;
      clone.querySelector('.lead').textContent = this.edad;
      return clone;

  }
}
// ======================================================================











//end.