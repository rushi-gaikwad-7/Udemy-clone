
   import {Developmentdata,webdata,businessdata,Financedata,itdata,offdata} from "/data/categoriesdata.js"
//    <a href=""></a>
   let devlopdata=Developmentdata();
   let subwebdata=webdata();
   let businesdata=businessdata();
   let Fdata=Financedata();
   let Ttdata=itdata();
   let officedata=offdata();
   import {Devlopment,Devlop} from "/scripts/categories.js";
   const navbar = () => {
   return`
     <a href="/index.html"><img id="mainlogo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
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
     <div id="itBox">IT & Software
     <div id="ItHover">${Devlopment(Ttdata,subwebdata)}</div>
     <i class="fa-solid fa-angle-right"></i></div>
     <div id="Office">Office Productivity
     <div id="offHover">${Devlopment(officedata,subwebdata)}</div>
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
         <input type="text" placeholder="Search for anything" id="navsearch">
     </div>
     <a href="https://business.udemy.com/"><div id="Business">Udemy Business
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
 <a href="/cartpage/maincart.html">
 <div id="bag">
 <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="">
 </div></a>
     <a href="/login/login.html"><div id="login">Log in</div></a>
     <a href="/signup/signup.html"><div id="signup">Sign up</div></a>
     <div id="lng">
     <i class="fa-solid fa-globe"></i>
     </div>`
}
export default navbar;

