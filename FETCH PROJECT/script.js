// fetch is a window object
// fetch is used to perform a request
//fetch method returns a promise
//the promise is either fullfilled or rejected



const apiUrl = "https://fakestoreapi.com/products"
fetch(apiUrl)
    .then((response) => {
        // console.log(response.json());
        return response.json();

    })
    .then((fetchData) => {
        console.log(fetchData)

        let shoppingData = "";

        fetchData.map((singleData) => {
            shoppingData += `
        <div>
          <img src=${singleData} alt="" class="card-image">
          <h4>${singleData.title}</>
             <p>description</p>
            <p>${singleData.description}</p>
            <p>${singleData.category}</p>
            <div><p>${singleData.price}</p>
                <p>${singleData.rating.rate} - ${singleData.rating.count}</p>
            </div>
        </div>
        `
        })
        document.getElementById("shop-container").innerHTML = shoppingData;
    }).catch((error) => {
        console.log(error);

    })












