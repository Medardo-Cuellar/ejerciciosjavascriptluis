/*
  1.- Activar el formulario, de tal forma que al dar click en el botón "crear usuario" se genere un objeto con la siguiente forma:
  person = {
    name:"...",
    email:"...",
    password:"..."
  }
  Resolucion:
    - Seleccionar el boton
    - Agregar un evento click
    - Crear un objeto person
    - Asignar los valores de los inputs al objeto person

  2.- Agregar a la funcionalidad, una lista "persons", de tal forma que al dar click en el boton, la persona creada en el paso anterior, se agregue a esa lista "persons"

   persons = []
  person -> persons

  3.- Agregar la funcionalidad para que cada que agregue una persona nueva, esta se vea reflejada junto con las anteriores en la interfaz de usuario
  */

let persons = [];

let botonCreacionUsuario = document.getElementById("boton-crear-usuario");

botonCreacionUsuario.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("click");
    let inputList = document.querySelectorAll("#person-form input");
    console.log(inputList); // NodeList(3) [input#name, input#email, input#password]
    let person = {}; //un string vacio
    inputList.forEach((input) => {
      let value = input.value;
      let property = input.name;
      person[property] = value;// le agrega el nombre y el valor al objeto person
      console.log(property);
      console.log(value);
    }); // iteramos sobre cada elemento de la lista de entradas y obtenemos el valor de cada uno
    console.log(person);
    
    persons = [...persons, person]; //agregamos el objeto person al arreglo persons no se usa el push porque se modifica el arreglo original
    console.log(persons);
    renderPersons(persons, "listaUsuarios");
   /*  
    console.log(persons); */
});


const createePersonItem = (person) => {
  let {name} = person;
  let personListItem = document.createElement("li");
  personListItem.classList.add("list-group-item");
  let personNameText = document.createTextNode(name);
  personListItem.append(personNameText);
  return personListItem;
}

const renderPersons = (dataArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);

  while(wrapper.firstChild){
    wrapper.removeChild(wrapper.firstChild);
  }
  dataArray.forEach((person) => {
    let personItem = createePersonItem(person);
    wrapper.append(personItem);
  });
};