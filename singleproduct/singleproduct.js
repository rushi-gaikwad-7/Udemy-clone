let header = document.querySelector("#homenavbar");
let footerbar = document.querySelector("#footer");
import homenavbar from "/components/homenavbar.js"
import homefooter from "/components/homefooter.js"
header.innerHTML = homenavbar();
footerbar.innerHTML = homefooter();

import{modifyFullname} from "/scripts/profile.js"
let loginDetails = JSON.parse(localStorage.getItem('loginDetails'));
let udemyUsers = JSON.parse(localStorage.getItem('udemyUsers'));
let btnUser = document.getElementById('profile');
for (let i = 0; i < loginDetails.length; i++) {
    for (let j = 0; j < udemyUsers.length; j++) {
        if (loginDetails[i].loginEmail == udemyUsers[j].signupEmail) {
            btnUser.innerText = `${modifyFullname(udemyUsers[j].signupFullname)}`
        }
    }

}


let product = JSON.parse(localStorage.getItem("singleproduct"));
console.log(product);
let cartproduct=JSON.parse(localStorage.getItem("cartproducts"))||[]
let productbox= document.querySelector("#productbox");
displayproduct(product);
function displayproduct(data){
    productbox.innerHTML="";
    data.map((el)=>{
        let box= document.createElement("div");
        let tdrbox= document.createElement("div");
        let pagepath= document.createElement("h4");
        pagepath.innerText= "Development  >  Web_Development   >  JavaScript";
        let title= document.createElement("h1");
        title.innerText=el.title;
        let des= document.createElement("h3");
        des.innerText=el.destitle;
        let ratingbox= document.createElement("div");
        ratingbox.setAttribute("id","ratingbox")
        let bestseller= document.createElement("h4");
        bestseller.innerText="Bestseller"
        let rating= document.createElement("h3");
        rating.innerText=el.rating;
        let rating_img= document.createElement("img");
        rating_img.setAttribute("id","ratingpic")
        if(el.rating<4.5){
            rating_img.src= `https://th.bing.com/th/id/OIP.O3wbiD5XgCTesLXWdwoh5QHaBi?pid=ImgDet&w=480&h=100&rs=1`
        }else if(el.rating==4.5){
            rating_img.src= `https://th.bing.com/th/id/R.7f71a02152c2e86b399ca55ac4208a11?rik=43%2biuqEjTNXppg&riu=http%3a%2f%2fi1.wp.com%2fsupplementpolice.com%2fwp-content%2fuploads%2f2017%2f04%2f46stars_small.png&ehk=eD26%2b28nDqOEyjHuzvl50ZrP5vk0FU0Vl9nDF7syIl4%3d&risl=&pid=ImgRaw&r=0`
        }else if(el.rating>4.5){
            rating_img.src= `https://garagegympro.com/wp-content/uploads/2019/03/4-7-stars-rating.jpg`
        }
        let trating= document.createElement("p");
        trating.innerText=el.totalsale+` ratings`;
        let tstudent= document.createElement("p");
        tstudent.innerText= `596,775 students`;
        trating.style.color="blueviolet";
        ratingbox.append(bestseller,rating,rating_img,trating,tstudent);
        let created= document.createElement("p");
        created.innerText="Created by Jonas Schmedtmaann";
        tdrbox.append(pagepath,title,des,ratingbox,created);
        let imgbox=document.createElement("div");
        imgbox.setAttribute("id","imgbox")
        let image= document.createElement("img");
        image.src=el.image;
        let price= document.createElement("h1");
        price.innerText="Rs"+el.price;
        let hour= document.createElement("p");
        hour.innerText="9  hours left at this price!"
        let btnbox=document.createElement("div");
        let btn1=document.createElement("button");
        btn1.innerText=`Add to cart`
        btn1.setAttribute("id","addtocart")
        btn1.addEventListener("click",()=>{
           cartproduct.push(el);
           localStorage.setItem("cartproducts",JSON.stringify(cartproduct))
           console.log(cartproduct)
           window.location.href="../cartpage/maincart.html"
        })
        let btn2= document.createElement("button");
        btn2.innerHTML=`<i class="fa-solid fa-heart"></i>`;
        btnbox.append(btn1,btn2);
        let buy= document.createElement("h4");
        buy.innerText="Buy now"
        buy.addEventListener("click",()=>{
            window.location.href="../PaymentGateway/payment.html"
        })
        imgbox.append(image,price,hour,btnbox,buy);
        box.append(tdrbox,imgbox)
        productbox.append(box);
    })
}