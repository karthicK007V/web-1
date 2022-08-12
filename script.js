async function makeup() {
  try {
      let res = await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
      let result = await res.json();
      console.log(foo(result));



      

  function foo(data) {
    for (var i = 0; i <= data.length; i++) {
        console.log(data[i])
        console.log(data[i].name);
        console.log(data[i].brand);
        console.log(data[i].price);
        console.log(data[i].description);
        console.log(data[i].image_link);
        console.log(data[i].product_link);
        
      

        var div = document.createElement("div");
        div.innerHTML =`
            <div class="container">
               


                        <div class="card" style="width: 25rem;">
                            <img class="card-img" src="${data[i].image_link}" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title"> Brand:${data[i].brand}</h5>
                                    <h5 class="card-title">Product Name:${data[i].name}</h5>
                                    <h5 class="card-title">Product Price :${data[i].price}</h5>
                                  <p class="card-text"><h6>Descripition:</h6>${data[i].description}</p>
                                    <a href="${data[i].product_link}" class="btn btn-primary">Product Link</a>
                                </div>
                        </div>
            
            </div>`




        document.body.append(div);

    }

}
foo()
     
  }

  catch (error) {
      console.log(error);
  }


  
  

}
makeup();
function click(){

}