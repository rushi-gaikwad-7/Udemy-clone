
 let header = document.querySelector("#homenavbar");
 let footerbar = document.querySelector("#footer");
 import homenavbar from "/components/homenavbar.js"
 import homefooter from "/components/homefooter.js"
 header.innerHTML = homenavbar();
 footerbar.innerHTML = homefooter();



import appendslider from "../scripts/appendslider.mjs";
import doSlide from "../scripts/slidercode.js";
console.log(appendslider)

import { pythondata, viewdata,Bussinessdata,jsdata,topjsdata } from "/data/sliderdata.js"


let jsCourses=jsdata();

let jSsliderbox= document.querySelector("#jssliderbox");
appendslider(jsCourses,jSsliderbox)

var items3= document.querySelectorAll("#jssliderbox>div");
doSlide(items3,"prev3","next3")



let topjsCourses=topjsdata();


let topJssliderbox= document.querySelector("#topjssliderbox");
appendslider(topjsCourses,topJssliderbox);

var items4= document.querySelectorAll("#topjssliderbox>div");
doSlide(items4,"prev4","next4")



let  sortbox= document.querySelector("#sortitem")
let filterdata=[...jsCourses,...topjsCourses];
displayFiltersearch(filterdata)
let singleproductarr=JSON.parse(localStorage.getItem("singleproduct"))||[];
function displayFiltersearch(data){
sortbox.innerHTML="";
data.map((el)=>{
 let box= document.createElement('div');
 let imgtitlebox= document.createElement('div');
 imgtitlebox.addEventListener("click",()=>{
     singleproductarr[0]=el;
     localStorage.setItem("singleproduct",JSON.stringify(singleproductarr));
     window.location.href="../singleproduct/singleproduct.html"
 })
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
let price= document.createElement("h4");
price.innerText="Rs"+el.price;

box.append(imgtitlebox,price);
sortbox.append(box);
})
}


let greater47= document.querySelector("#greater47");
let greater45= document.querySelector("#greater45");
let greater40= document.querySelector("#greater40");

greater47.addEventListener("click",()=>{
    let greater47data= filterdata.filter((el)=>{
         return el.rating>=4.7;
    })
    greater45.checked= false;
    greater40.checked= false;
    displayFiltersearch(greater47data)
})


greater45.addEventListener("click",()=>{
    let greater45data= filterdata.filter((el)=>{
        return el.rating==4.5;
    })
    greater40.checked= false;
    greater47.checked= false;
    displayFiltersearch(greater45data)
})


greater40.addEventListener("click",()=>{
    let greater40data= filterdata.filter((el)=>{
        return el.rating<4.5;
    })
    greater45.checked= false;
    greater47.checked= false;
    displayFiltersearch(greater40data)
})

let sortdropdown=document.querySelector("#sortdropdown")
sortdropdown.addEventListener("change",()=>{
    if(sortdropdown.value=="popular"){
        let mostpopulardata= filterdata.filter((el)=>{
            let str=el.totalsale;
            let num="";
            for(let i=1;i<str.length-1;i++){
            num=num+str[i];
            }
            num= Number(num);
            return num>100000;
        })
        console.log(mostpopulardata)
        displayFiltersearch(mostpopulardata)
    }else if(sortdropdown.value=="highrated"){
        let greater47data= filterdata.filter((el)=>{
            return el.rating>=4.7;
       })
       displayFiltersearch(greater47data);
    }else if(sortdropdown.value=="new"){
        let newdata= filterdata.filter((el)=>{
            let str=el.totalsale;
            let num="";
            for(let i=1;i<str.length-1;i++){
            num=num+str[i];
            }
            num= Number(num);
            return num<=75000;
        })
        displayFiltersearch(newdata)
    }
   
})

document.querySelector("#clearfilter").addEventListener("click",()=>{
    displayFiltersearch(filterdata);
    greater45.checked= false;
    greater40.checked= false;
    greater47.checked= false;
})
