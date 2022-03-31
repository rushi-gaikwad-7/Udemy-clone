

 import {Developmentdata,webdata,businessdata,Financedata} from "/data/categoriesdata.js"
   
 let devlopdata=Developmentdata();
 let subwebdata=webdata();
 let businesdata=businessdata();
 let Fdata=Financedata();
 import {Devlopment,Devlop} from "/scripts/categories.js";

const homenavbar = () => {
    return `
     <div>
     <a href="index.html"><img id="mainlogo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
     alt="mainlogo"></a>
     <div id="Categories">Categories
     <div id="hoverDiv">
     <div id="Devlopment">Devlopment
     <i class="fa-solid fa-angle-right"></i>
     <div id="devlopHover">${Devlopment(devlopdata,subwebdata)}</div>
     </div>
     <div id="Bbox">Business
     <i class="fa-solid fa-angle-right"></i>
     <div id="BHover">${Devlopment(businesdata,subwebdata)}</div>
     </div>
     <div id="Fbox">Finance & Accounting
     <i class="fa-solid fa-angle-right"></i>
     <div id="FHover">${Devlopment(Fdata,subwebdata)}</div>
     </div>
     <div>IT & Software
     <i class="fa-solid fa-angle-right"></i></div>
     <div>Office Productivity
     <i class="fa-solid fa-angle-right"></i></div>
     <div>Personal Devlopment
     <i class="fa-solid fa-angle-right"></i></div>
     <div>Design
     <i class="fa-solid fa-angle-right"></i></div>
     <div>Marketing
     <i class="fa-solid fa-angle-right"></i></div>
     <div>Health & Fitness
     <i class="fa-solid fa-angle-right"></i></div>
     <div>Music
     <i class="fa-solid fa-angle-right"></i></div>
     </div>
     </div>
     <div id="searchbar">
         <i class="fa-solid fa-magnifying-glass"></i>
         <input type="text" placeholder="Search for anything">
     </div>
     <a href=""><div id="Business">Udemy Business
     <div id="bhoverDiv">
        <h4>Get your team access to over 6,000 top Udemy courses, anytime, anywhere.</h4>
        <div>Try Udemy for Business</div>
    </div>
    </div></a>
     <a href=""><div id="tech">Teach on Udemy
     <div id="thoverDiv">
     <h4>Turn what you know into an opportunity and reach millions around the world.</h4>
     <div>Learn more</div>
 </div></div></a>
     <a href=""><div id="learing">My learing
     <div id="LrhoverDiv">
     <h4>Start learning from over 183,000 courses today.</h4>
     <div>Browse now</div>
 </div></div></a>
     <div id="wishlist">
     <i class="fa-regular fa-heart"></i>
     </div>
     <div id="bag">
     <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="">
     </div>
     <div id="bellicon">
     <i class="fa-regular fa-bell"></i>
     </div>
     <div id="profile">RG
     </div>
     </div>
     <div>
     <div id="dDiv">Devlopment
     <div id="dhover">${Devlop(devlopdata)}</div></div>
     <p>Business</p>
     <p>Finance & Accounting</p>
     <p>IT & Software</p>
     <p>Office Productivity</p>
     <p>Personal Devlopment</p>
     <p>Design</p>
     <p>Marketing</p>
     <p>Health & Fitness</p>
     <p>Music</p>
     </div>
     `
}
export default homenavbar;

