function handleClick(index){
   fetch('items.json')
   .then(response => response.json())
   .then(data => {
    const proDucts = data.products[index];
    console.log(proDucts);
    let cartItems = localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];
    cartItems.push(proDucts);
    localStorage.setItem("cart", JSON.stringify(cartItems));
   })
}



fetch('items.json') 
.then(response => response.json())
.then(data =>{
  const productsContainer = document.getElementById("products-container");
  for(let i=0; i<data.products.length; i++){
    const products = data.products[i];
    const Cards = document.createElement('div');
    Cards.classList.add('col-lg-4','col-md-4','col-sm-6','col-12','mb-4');

    Cards.innerHTML= `
    <div class="card card-main">
    <img src="${products.image}" class="card-img-top" alt="${products.name}">
    <div class="card-body">
      <h5 class="card-title">${products.name}</h5>
      <p class="card-text price">Price: ${products.rate}</p>
      <p class="card-text orRate">${products.orRate}</p>
      <button class="button-btn" onclick="handleClick(${i})">
      <a href="new.html" class="next-page">${products.button}</a>
      </button>
    </div>
  </div>
  `;
  productsContainer.appendChild(Cards);
  }
})
.catch(error => console.error('Error fetching JSON:', error));


