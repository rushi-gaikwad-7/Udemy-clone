



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

let sortbox= document.querySelector("#sortitem")    
let data= JSON.parse(localStorage.getItem("cartproducts"))||[];
displayFiltersearch(data);

function displayFiltersearch(data){
sortbox.innerHTML="";
data.map((el,index)=>{
 let box= document.createElement('div');
 let imgtitlebox= document.createElement('div');
 let image= document.createElement('img');
 image.src=el.image;
 let tdrbox= document.createElement("div");
 let title= document.createElement("h4");
 title.innerText=el.title;
 let dis= document.createElement('h5');
 dis.innerText=el.destitle;
 let instructor= document.createElement('p');
 instructor.innerText=el.instructor;
 let ratingdiv= document.createElement('div');
 let rating= document.createElement("h4");
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
trating.innerText=el.totalsale;
ratingdiv.append(rating,rating_img,trating);
tdrbox.append(title,dis,instructor,ratingdiv)
imgtitlebox.append(image,tdrbox);
let pricebox= document.createElement("div");
pricebox.setAttribute("id","pricebox")
pricebox.style.display="block"
let price= document.createElement("h4");
price.innerText="Rs"+el.price;
pricebox.append(price)
box.append(imgtitlebox,pricebox);
sortbox.append(box);
})
}


document.querySelector("#totalitem").innerText=`${data.length} Course in Here`


import appendslider from "./appendslider.mjs";
import doSlide from "./slidercode.js";

import { pythondata, viewdata,Bussinessdata,jsdata,topjsdata } from "/data/sliderdata.js"

let jsCourses=jsdata();

let jSsliderbox= document.querySelector("#jssliderbox");
appendslider(jsCourses,jSsliderbox)

var items3= document.querySelectorAll("#jssliderbox>div");
doSlide(items3,"prev3","next3")

document.querySelector("#checkoutbtn").addEventListener("click",()=>{
    window.location.href="../PaymentGateway/payment.html"
})