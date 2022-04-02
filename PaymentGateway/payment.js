let all_total_price = document.getElementById("all_total_price");
let discounted_price = document.getElementById("discounted_price");
let total = document.getElementById("total")


let totalcartprice= localStorage.getItem("totalcartprice");
all_total_price.innerText= Math.floor(Number((totalcartprice*100)/80));
discounted_price.innerText= totalcartprice;
total.innerText=totalcartprice;
function shoppingComplete() {
  let array = [
    "Payment Successfull",
    "Course Linked with Your Profile successfully",
    "Happy Learning!",
    "Stay Healthy, Thanks for opting online education!",
  ];

  let h1 = document.getElementById("notification");
  let index = 0;
  h1.textContent = array[index++];

  setTimeout(function () {
    h1.textContent = array[index++];
  }, 3000);
  setTimeout(function () {
    h1.textContent = array[index++];
  }, 8000);
}



let  sortbox= document.querySelector("#sortitem")    
let data= JSON.parse(localStorage.getItem("cartproducts"))||[];
displayFiltersearch(data);

function displayFiltersearch(data){
sortbox.innerHTML="";
data.map((el,index)=>{
 let box= document.createElement('div');
 box.id="box";
 let image= document.createElement('img');
 image.src=el.image;
 let title= document.createElement("h4");
 title.innerText=el.title;
let pricebox= document.createElement("div");
pricebox.setAttribute("id","pricebox")
pricebox.style.display="block"
let price= document.createElement("h4");
price.innerText="Rs"+el.price;


pricebox.append(price)
box.append(image,title,pricebox);
sortbox.append(box);
})
}