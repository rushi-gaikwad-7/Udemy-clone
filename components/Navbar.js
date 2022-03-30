
   import {Developmentdata,webdata,businessdata,Financedata} from "/data/categoriesdata.js"
   
   let devlopdata=Developmentdata();
   let subwebdata=webdata();
   let businesdata=businessdata();
   let Fdata=Financedata();
console.log(Fdata);
   import Devlopment from "/scripts/categories.js";
   const navbar = () => {
   return`
     <a href="index.html"><img id="mainlogo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
     alt="mainlogo"></a>
     <div id="Categories">
     <p>Categories</p>
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
     <div id="bag">
     <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="">
     </div>
     <div id="login">
     Log in
     </div>
     <div id="signup">
     Sign up
     </div>
     <div id="lng">
     <i class="fa-solid fa-globe"></i>
     </div>`
}
export default navbar;

