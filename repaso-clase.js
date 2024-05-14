function personaP(nombre,apellido){
  this.nombre = nombre;
  this.apellido= apellido;
}
personaP.prototype.decirNombre=function(){
  return ´Mi Nomre es ${this.nombre} ${this.apellido}´;   
}

function trabajadorP(nombre,apellido,profesion){
  // llame al metodo constructor padre con (call)
  personaP.call(this.Nomre,apellido);
  this.profesion=profesion;
}

// estancias de la clase
trabajadorP.prototype = Object.create(personaP.prototype);
trabajadorP.prototype = constructor = trabajadorP;
trabajadorP.prototype = decirProfesion = function(){
  return ´yo trabajo en ${this.profesion}´;
}

// estancia de la clase
let persona=new personaP("Diego,Novoa")
persona = decirNombre();

/////  en ECMAScript 6 tenemos adceso a las clases keyboards 

class personaC{
  constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido= apellido;
  }
  decirNombre(){
    return ´Mi Nomre es ${this.nombre} ${this.apellido}´;
 }
}

// crear una herencia de la clase persona con keyboards extends 

class trabajadorC extends personaC{
  constructor(nombre,apellido,profesion){
    super(nombre,apellido);
    this.profesion=profesion;
  }
decirProfesion(){
  return ´yo trabajo en ${this.profesion}´; 
}

}