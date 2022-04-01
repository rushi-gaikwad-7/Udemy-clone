
 let header = document.querySelector("#navbar");
 let footerbar = document.querySelector("#footer");
 import navbar from "/components/navbar.js"
 import footer from "/components/footer.js"

 header.innerHTML = navbar(); 
 footerbar.innerHTML = footer();

 import {
    pythondata,
    viewdata,
    Bussinessdata,jsdata,topjsdata
} from "/data/sliderdata.js";

let BussinesCourses=Bussinessdata();
let jsCourses=jsdata();
let csCourses=viewdata();
let pythonCourses=pythondata();


let data;

let searchvalue= localStorage.getItem("searchvalue");


if(searchvalue=="python"){
    data=pythonCourses;
}else if(searchvalue=="javascript"){
    data=jsCourses;
}else if(searchvalue=="bussiness"){
    data=BussinesCourses;
}else if(searchvalue=="development"){
    data=csCourses;
}


let  sortbox= document.querySelector("#sortitem")
displayFiltersearch(data)
let singleproductarr=JSON.parse(localStorage.getItem("singleproduct"))||[];
function displayFiltersearch(data){
sortbox.innerHTML="";
data.map((el)=>{
 let box= document.createElement('div');
 let imgtitlebox= document.createElement('div');
 imgtitlebox.addEventListener("click",()=>{
     singleproductarr[0]=el;
     localStorage.setItem("singleproduct",JSON.stringify(singleproductarr));
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
    let greater47data= data.filter((el)=>{
         return el.rating>=4.7;
    })
    greater45.checked= false;
    greater40.checked= false;

    displayFiltersearch(greater47data)
})


greater45.addEventListener("click",()=>{
    let greater45data= data.filter((el)=>{
        return el.rating==4.5;
    })
    greater40.checked= false;
    greater47.checked= false;

    displayFiltersearch(greater45data)
})


greater40.addEventListener("click",()=>{
    let greater40data= data.filter((el)=>{
        return el.rating<4.5;
    })
    greater45.checked= false;
    greater47.checked= false;
    displayFiltersearch(greater40data)
})


document.querySelector("#clearfilter").addEventListener("click",()=>{
    displayFiltersearch(data);
    greater45.checked= false;
    greater40.checked= false;
    greater47.checked= false;
})


document.querySelector("#searchv1").innerText=`10,000 results for “${searchvalue}”`
document.querySelector("#searchv2").innerText=`Explore ${searchvalue} courses`