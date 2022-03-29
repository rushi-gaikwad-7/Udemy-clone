const navbar = () => {
    return `
     <div>
     <a href="index.html"><img id="mainlogo" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
     alt="mainlogo"></a>
     <a href=""><div>Categories</div></a>
     <div id="searchbar">
         <i class="fa-solid fa-magnifying-glass"></i>
         <input type="text" placeholder="Search for anything">
     </div>
     <a href=""><div>Udemy Business</div></a>
     <a href=""><div>Teach on Udemy</div></a>
     <a href=""><div>My learing</div></a>
     <div id="wishlist">
     <i class="fa-regular fa-heart"></i>
     </div>
     <div id="bag">
     <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="">
     </div>
     <div id="bellicon">
     <i class="fa-regular fa-bell"></i>
     </div>
     <div id="profile">
     <i class="fa-regular fa-user"></i>
     </div>
     </div>
     <div>
     <p>Devlopment</p>
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

export default navbar;