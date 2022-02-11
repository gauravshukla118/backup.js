var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];
var cartArray = [];

$(document).ready(function () {
  $('#products').after('<div id = "cart"></div>');
  header();
  var allProduct = listProducts(products);
  $("#products").html(allProduct);

  //Add to Cart Function
  $(".add-to-cart").click(function () {
    var p_id = $(this).data("pid"); //fetching id of product to be added to cart
    var prod = getProduct(p_id);
    var quantity = 0;
    if (cartArray.length == 0){
        prod.quantity = 1;
        cartArray.push(prod);
    }
    else{
        if (cartArray.includes(prod)){
            prod.quantity +=1;
        }
        else{
            quantity = 1;
            prod.quantity = quantity;
            cartArray.push(prod);
        }
    }
    var cartData = listCart(cartArray);
    $("#cart").html(cartData);

  });
});

function header() {
  $("#header").html(`<h1 id="logo">Logo</h1>
    <nav>
        <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>`);
}

function listProducts(result) {
  html = "";

  for (var i = 0; i < result.length; i++) {
    html += `<div id="product-${result[i].id}" class="product">
                <img src="images/${result[i].image}">
                <h3 class="title"><a href="#">Product ${result[i].id}</a></h3>
                <span>Price: ${result[i].price}</span>
                <a class="add-to-cart" data-pid = "${result[i].id}" href="#">Add To Cart</a>
            </div>`;
  }
  return html
  
}

function listCart(result) {
    html = "";
  
    for (var i = 0; i < result.length; i++) {

      html += `<div id="product-${result[i].id}" class="product">
                  <img src="images/${result[i].image}">
                  <h3 class="title"><a href="#">Product ${result[i].id}</a></h3>
                  <span>Price: ${result[i].price}</span>                  
              </div>`;
    }
    return html;
    
  }

function getProduct(p_sku) {
  for (var i = 0; i < products.length; i++) {
    if (p_sku == products[i].id) {
      return products[i];
    }
  }
}
