/* 
Pasos para crear cada tarjeta:
*/

let products = [];

let botonCrearProducto = document.getElementById("boton-crear-producto");

botonCrearProducto.addEventListener("click", (event) => {
  event.preventDefault();
  //console.log("Botón crear producto clickeado");
  let inputList = document.querySelectorAll("#product-form input");
  //console.log(inputList); // NodeList(5) [input#nombre.form-control, input#descripcion.form-control, input#precio.form-control, input#categoria.form-control, input#imagen.form-control]
  let product = {};
  inputList.forEach((input) => {
    let value = input.value;
    let property = input.name;
    product[property] = input.value;
    //console.log(`Propiedad: ${property}, Valor: ${value}`);
  });
  //console.log(product);
  products = [...products, product];
  //console.log(products)
  printProducts(products, "product-wrapper");
});

/* 

la tarjeta debe verse asi
 <div class="col">
    <div class="card mb-3">
        <img src="https://picsum.photos/200/200" class="card-img-top img-thumbnail" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">nombre</h5>
            <p class="card-text">descripcion</p>
            <div class="d-flex justify-content-end">
                <p class="card-text"><small class="text-muted">precio: $500.00 mxn</small></p>
            </div>
        </div>
    </div>
</div>

*/

const getShortDescription = (description) => {
  if (description.length > 10) {
    return `${description.split(" ").slice(0, 10).join(" ")}...`;
  }
  return description;
};

const createProductCard = (product) => {
  let { nombre, descripcion, precio, imagen } = product;
  let productCard = document.createElement("div");
  productCard.classList.add("col");

  let card = document.createElement("div");
  card.classList.add("card");

  let cardImage = document.createElement("img");
  cardImage.setAttribute("src", imagen);
  cardImage.setAttribute("alt", `Imagen de ${nombre}`);
  cardImage.classList.add("card-img-top", "img-thumbnail");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let title = document.createElement("h5");
  title.classList.add("card-title", "text-center");
  title.textContent = nombre;

  let description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = getShortDescription(descripcion);

  let price = document.createElement("p");
  price.classList.add("card-text");
  let small = document.createElement("small");
  small.classList.add("text-muted");
  small.textContent = `Precio: $${precio} mxn`; // ya se le agrega el precio como se desea
  price.append(small);
  cardBody.append(title, description, price);
  card.append(cardImage, cardBody);
  productCard.append(card);
  return productCard;
};

const printProducts = (dataArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  dataArray.forEach((product) => {
    let productCard = createProductCard(product);
    wrapper.append(productCard);
  });
};
