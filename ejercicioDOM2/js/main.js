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
  products.push(product);
  //console.log(product);
  //console.log(products)
  printProducts(products, "product-wrapper");
});

let botonGenerarProducto = document.getElementById("boton-generar-producto");
let numeroArticulo = 1;

botonGenerarProducto.addEventListener("click", (event) => {
  event.preventDefault();
  let precio = Math.floor(Math.random() * 1000);
  let randomeImage = Math.floor(Math.random() * 100) + 1;
  let imagen = `https://picsum.photos/id/${randomeImage}/200`;

  let productInput = document.getElementById("nombre");
  productInput.value = `Producto ${numeroArticulo}`;
  let categoryInput = document.getElementById("categoria");
  categoryInput.value = `Categoria${numeroArticulo}`;
  let priceInput = document.getElementById("precio");
  priceInput.value = precio;
  let imageInput = document.getElementById("imagen");
  imageInput.value = imagen;
  numeroArticulo++;
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
  const shortDescription = description.split(" ");
  if (shortDescription.length > 10) {
    return ` ${shortDescription.slice(0, 10).join(" ")}...`;
  }
  return description;
};
let categoriaAttribute = document.createAttribute("data-categoria");

console.log(categoriaAttribute);

const createProductCard = (product) => {
  let { nombre, descripcion, precio, categoria, imagen } = product;
  let productCard = document.createElement("div");
  productCard.classList.add("col");
  productCard.setAttribute("data-categoria", categoria);
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

  let priceContainer = document.createElement("div");
  priceContainer.classList.add("d-flex", "justify-content-end");
  let price = document.createElement("p");
  price.classList.add("card-text");
  let small = document.createElement("small");
  small.classList.add("text-muted");
  small.textContent = `Precio: $${precio} mxn`; // ya se le agrega el precio como se desea
  price.append(small);
  priceContainer.append(price);
  cardBody.append(title, description, priceContainer);
  card.append(cardImage, cardBody);

  productCard.append(card); /* 
  console.log(typeof productCard);
  console.log(productCard) */
  return productCard;
};

const printProducts = (dataArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  } // esto evita que se vaya agregando una y otra vez los productos
  dataArray.forEach((product) => {
    let productCard = createProductCard(product);
    wrapper.append(productCard);
  });
  console.log(wrapper)
};
