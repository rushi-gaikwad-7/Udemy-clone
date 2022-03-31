
import appendslider from "../scripts/appendslider.js";
import doSlide from "../scripts/slidercode.js";
console.log(appendslider)

function makeData(url,t,i,r,p,ts,st){
    this.image= url;
    this.title= t;
    this.instructor=i;
    this.rating=r;
    this.price=p;
    this.totalsale=ts;
    this.stprice=st;
    this.destitle=`JavaScript for Beginners : Work closely with me doing exercises & learn more. I make Javascript easy for you guaranteed.`;
    this.desop1= `Learn to write JavaScript functions`;
    this.desop2= `Code your own apps and games in JavaScript for Mac, Windows, or Linux, for beginners of all ages`;
    this.desop3= `Become job-ready by understanding how JavaScript really works behind the scenes`
}


let jsobj1= new makeData(`https://img-b.udemycdn.com/course/240x135/63612_8797_4.jpg`,`1 Hour JavaScript`,`John Bura`,4.5,455,`(64646)`,7623)
let jsobj2= new makeData(`https://img-b.udemycdn.com/course/240x135/364426_2991_6.jpg`,`JS: Underdstanding the eird Parts`,`Anthony Alicea`,4.7,455,`(134674)`,4845)
let jsobj3= new makeData(`https://img-b.udemycdn.com/course/240x135/405818_aa3f_3.jpg`,`JavaScript For Beginners`,`Edwin Diaz, Coding Faculty Solutions`,4.5,455,`(75000)`,3538)
let jsobj4= new makeData(`https://img-b.udemycdn.com/course/240x135/426196_3cb8_4.jpg`,`JavaScript from Beginner to Expert`,`Arkadiusz Wlodarczyk`,4.4,455,`(86774)`,4538)
let jsobj5= new makeData(`https://img-b.udemycdn.com/course/240x135/584494_f309_6.jpg`,`JavaScript for Kids: Code for your Own Game`,`Bryson Payne`,4.5,455,`(94674)`,3543)
let jsobj6= new makeData(`https://img-b.udemycdn.com/course/240x135/670034_ce04_6.jpg`,`Advnced JavaScript`,`Asim Hussain`,4.7,455,`(234674)`,3563)
let jsobj7= new makeData(`https://img-b.udemycdn.com/course/240x135/846270_0c09_6.jpg`,`JavaScript JSON AJAX API data for web pages Objects Arrys`,`Laurence Svekis`,4.6,455,`(89674)`,4548)
let jsobj8= new makeData(`https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg`,`The Complete JavaScipt Course 2022`,`Jonas Scchmedtmann`,4.7,455,`(43532)`,3432)
let jsobj9= new makeData(`https://img-b.udemycdn.com/course/240x135/860812_f16e_23.jpg`,`JavaScript Beginner Bootcamp(2022)`,`Rob Merrill`,4.4,455,`(346743)`,3562)
let jsobj10= new makeData(`https://img-b.udemycdn.com/course/240x135/861624_864d_2.jpg`,`ES6 JavaScript: The Complete Developer's Guide`,`Stephen Grider`,4.7,455,`(93477)`,3432)

let jsCourses=[jsobj1,jsobj2,jsobj3,jsobj4,jsobj5,jsobj6,jsobj7,jsobj8,jsobj9,jsobj10];

let jSsliderbox= document.querySelector("#jssliderbox");
appendslider(jsCourses,jSsliderbox)

var items3= document.querySelectorAll("#jssliderbox>div");
doSlide(items3,"prev3","next3")





let topjs1= new makeData(`https://img-b.udemycdn.com/course/240x135/1565838_e54e_15.jpg`,`The Complete 2022 Web Development Bootcamp`,`Dr Angela Yu`,4.7,455,`(34674)`,4748)
let topjs2= new makeData(`https://img-b.udemycdn.com/course/240x135/1430746_2f43_10.jpg`,`The Complete WebDeveopment  in 2022:Zero to Mastery`,`Andrei Nagoie`,4.7,455,`(45354)`,4564)
let topjs3= new makeData(`https://img-b.udemycdn.com/course/240x135/2634490_e343_2.jpg`,`The Modern Javascript Bootcamp Courses(2022)`,`Colt Steele,Stephen Grider`,4.7,455,`(78923)`,4743)
let topjs4= new makeData(`https://img-b.udemycdn.com/course/240x135/764164_de03_2.jpg`,`The Complete Web Developer Course 2.0`,`Rob Percival Codestars by Rob Percival`,4.5,455,`(89043)`,5742)
let topjs5= new makeData(`https://img-b.udemycdn.com/course/240x135/1650610_2673_6.jpg`,`The Complete Junior to Senior Web Developer Roadmap(2022)`,`Anrei Neagoie`,4.7,455,`(90321)`,4749)
let topjs6= new makeData(`https://img-b.udemycdn.com/course/240x135/3030132_afb3_2.jpg`,`JavaScript Web Projects: 20 projects`,`Anderi Negoriua,JAtino Woung`,4.7,455,`(890234)`,2337)
let topjs7= new makeData(`https://img-b.udemycdn.com/course/240x135/1218586_9f86.jpg`,`The Advance Web Development Boot Camp`,`Agena Marrie`,4.4,455,`(134674)`,4752)
let topjs8= new makeData(`https://img-b.udemycdn.com/course/240x135/3598684_c319_5.jpg`,`10 Mega Responsive Websites with HTML,CSS,and JavaScripts`,`Code And Create George Lomidze`,4.5,455,`(53312)`,4538)
let topjs9= new makeData(`https://img-b.udemycdn.com/course/240x135/818990_57c0_3.jpg`,`Git a Web Developer JOB: materring The Modern Workflow `,`Brad schiff`,4.6,455,`(334674)`,4748)
let topjs10= new makeData(`https://img-b.udemycdn.com/course/240x135/4246614_5387_3.jpg`,`30+ webprojects with HTML CSS ANS JS `,`Code And Create ,Jorgie`,4.5,455,`(89474)`,2337)

let topjsCourses=[topjs1,topjs2,topjs3,topjs4,topjs5,topjs6,topjs7,topjs8,topjs9,topjs10];


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
greater47.addEventListener("click",()=>{
    let greater47data= filterdata.filter((el)=>{
         return el.rating>=4.7;
    })
    displayFiltersearch(greater47data)
})

let greater45= document.querySelector("#greater45");
greater45.addEventListener("click",()=>{
    let greater45data= filterdata.filter((el)=>{
        return el.rating==4.5;
    })
    displayFiltersearch(greater45data)
})

let greater40= document.querySelector("#greater40");
greater40.addEventListener("click",()=>{
    let greater40data= filterdata.filter((el)=>{
        return el.rating<4.5;
    })
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
