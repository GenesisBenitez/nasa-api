const apiKey = "WwTHsyMMt5blkvejSrcjdwy2qVIP1QsMf2br6Qmq"
const apiRootUrl = "https://images-api.nasa.gov"
const searchEndPoint = "/search?q="

$(document).ready(function(){
    $("#searchImages").submit(function(e){
        $("#nasaResults").empty();
    e.preventDefault();
      const searchValue = $("#searchValue").val()
      fetch(apiRootUrl + searchEndPoint + searchValue)
      .then(response => response.json())
      .then(data => {
          console.log(data.collection.items);
          for(let i = 0; i < data.collection.items.length; i++){
              $("#nasaResults").append(
                  `
                  <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 align="center">
                    <div class="card mb-3">
                        <div class="row">
                    
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${ifItemIsUndefined(data.collection.items[i].data[0].title)}</h5>
                                    <p class="card-text">${ifItemIsUndefined(data.collection.items[i].data[0].description)}</p>
                                    <p class="card-text"><small class="text-muted">${ifItemIsUndefined(data.collection.items[i].data[0].date_created)}</small></p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <img src="${ifItemIsUndefined(data.collection.items[i].links[0].href)}" width="100%" height="280px" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
                  `
              )
          }
      })
    })


})

function ifItemIsUndefined(item){
    if(item === undefined){
        return "No data"
    }else{
        return item;
    }
}