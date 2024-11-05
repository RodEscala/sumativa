
function loadProducts(){
    const productsList = document.getElementById("productsList")

    products.forEach(product =>{

        const productCard = document.createElement("div");
        productCard.className = "col-md-4 mb-4"
        productCard.innerHTML =
         `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top d-fluid" alt=${product.title}>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Precio: </strong> $${product.price}</p>
                    <a href="producto-detalle.html?id=${product.id}" class="btn btn-primary mt-auto">Ver Detalle</a>
                </div>
            </div>
        `;

        productsList.appendChild(productCard);
    })
}

