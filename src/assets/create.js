function create(id, name, price, description, image)
{
    var img;
    if(image != '')
      img = `https://full-stack-images.s3.us-east-2.amazonaws.com/${image}`;
    else
      img = "../../assets/product.png";
    var desc;
    if(description != "undefined")
      desc = description;
    else
      desc = "No Description Provided";
    document.getElementById("cards").innerHTML += 
    `<div class="card">
    <img src="${img}" width="200px" height="200px" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" id="title${id}">${name}</h5>
      <p class="card-text" id="desc">${desc}</p>
      <a href="#" class="btn btn-primary" id="${id}" onclick="store(${id})">$${price}</a>
    </div>
  </div>`;
}