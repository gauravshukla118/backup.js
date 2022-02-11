var products = [
    { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
    { id: 102, name: "Football", image: "football.png", price: 120 },
    { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
    { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
    { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
  ];
  
  $(document).ready(function () {
    header();
    var allProduct = listProducts(products);
    $("#products").html(allProduct);
  
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
                  <a class="add-to-cart" href="#">Add To Cart</a>
              </div>`;
    }
    return html
    
  }
  

  
