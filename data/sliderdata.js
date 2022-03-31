function makeData(url, t, i, r, p, ts, st) {
    this.image = url;
    this.title = t;
    this.instructor = i;
    this.rating = r;
    this.price = p;
    this.totalsale = ts;
    this.stprice = st;
    this.destitle = `JavaScript for Beginners : Work closely with me doing exercises & learn more. I make Javascript easy for you guaranteed.`;
    this.desop1 = `Learn to write JavaScript functions`;
    this.desop2 = `Code your own apps and games in JavaScript for Mac, Windows, or Linux, for beginners of all ages`;
    this.desop3 = `Become job-ready by understanding how JavaScript really works behind the scenes`
}
let python1 = new makeData(`https://img-b.udemycdn.com/course/240x135/2776760_f176_9.jpg`, `100 Days of Code: The Complete Python `, `Dr angella Yu`, 4.5, 455, `(634674)`, 6723)
let python2 = new makeData(`https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg`, `2022 Complete Python Bootcamp `, `Jose Portilla`, 4.6, 455, `(37543)`, 7089)
let python3 = new makeData(`https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg`, `Learn Python Programming Masterclass`, `Tim Buchalka Jean-Paul`, 4.6, 455, `(94674)`, 8934)
let python4 = new makeData(`https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg`, `Complete Python zero To Mastery `, `Andrei  Neagoie`, 4.7, 455, `(38274)`, 8442)
let python5 = new makeData(`https://img-b.udemycdn.com/course/240x135/692188_9da7_26.jpg`, `The Python Mega Course 2022`, `Ardit Sulcie`, 4.6, 455, `(734674)`, 7937)
let python6 = new makeData(`https://img-c.udemycdn.com/course/240x135/1547268_1b84_3.jpg`, `The Complete Python `, `Rob Parcival`, 4.6, 455, `(53674)`, 4642)
let python7 = new makeData(`https://img-b.udemycdn.com/course/240x135/903744_8eb2.jpg`, `Python For Data Science And Machine Learing`, `Jose portilla`, 4.6, 455, `(23784)`, 3657)
let python8 = new makeData(`https://img-c.udemycdn.com/course/240x135/1386294_cf10_3.jpg`, `Python for  Beginners`, `Zyan Kahna`, 4.5, 455, `(53464)`, 4749)
let python9 = new makeData(`https://img-c.udemycdn.com/course/240x135/903378_f32d_7.jpg`, `The Python Bibble, Everything You need to Program`, `Josh wella`, 4.7, 455, `(234424)`, 4649)
let python10 = new makeData(`https://img-b.udemycdn.com/course/240x135/543600_64d1_4.jpg`, `Automate the boaring stuff`, `Al Sweigart`, 4.5, 455, `(389544)`, 4754)

let pythonCourses = [python1, python2, python3, python4, python5, python6, python7, python8, python9, python10]

const pythondata = () => {
    return pythonCourses;
}





//                                <-----------Students Viwing data ---------------->
let csobj1 = new makeData(`https://img-b.udemycdn.com/course/240x135/1565838_e54e_15.jpg`, `The Complete 2022 Web Development Bootcamp`, `Dr Angeal Yu`, 4.7, 455, `(64674)`, 4672)
let csobj2 = new makeData(`https://img-b.udemycdn.com/course/240x135/567828_67d0.jpg`, `2022 Complete Python Bootcamp`, `Josh Portila`, 4.6, 455, `(456724)`, 9083)
let csobj3 = new makeData(`https://img-b.udemycdn.com/course/240x135/1362070_b9a1_2.jpg`, `React- The Complete guide`, `Academind by Maximillan`, 4.6, 455, `(142674)`, 2845)
let csobj4 = new makeData(`https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg`, `The Complete JavaScript course`, `Jonas Schmedtmaan`, 4.7, 455, `(346741)`, 7621)
let csobj5 = new makeData(`https://img-b.udemycdn.com/course/240x135/625204_436a_3.jpg`, `The Web Development BootCamp`, `Colt Steele`, 4.7, 455, `(234674)`, 3528)
let csobj6 = new makeData(`https://img-b.udemycdn.com/course/240x135/2196488_8fc7_7.jpg`, `Ultimate AWS Certified Solutions`, `Stephane Maarek `, 4.7, 455, `(534674)`, 3427)
let csobj7 = new makeData(`https://img-b.udemycdn.com/course/240x135/793796_0e89_2.jpg`, `Microsoft Excel BTOA`, `Kyle Pew, Office web`, 4.7, 455, `(234674)`, 3521)
let csobj8 = new makeData(`https://img-b.udemycdn.com/course/240x135/762616_7693_3.jpg`, `Java Programming And Masterclass`, `Tim Buchalka's `, 4.6, 455, `(53274)`, 3437)
let csobj9 = new makeData(`https://img-b.udemycdn.com/course/240x135/756150_c033_2.jpg`, `The Complete SQL Bootcamp`, `Jose Portilla`, 4.7, 455, `(33424)`, 4432)
let csobj10 = new makeData(`https://img-b.udemycdn.com/course/240x135/437398_46c3_10.jpg`, `Angular The Complete Guide`, `Maximal Schwezweeala`, 4.7, 455, `(74674)`, 3548)

let csCourses = [csobj1, csobj2, csobj3, csobj4, csobj5, csobj6, csobj7, csobj8, csobj9, csobj10];
const viewdata = () => {
    return csCourses;
}



//                       <----Data for Bussiness Slider----->
let obj1 = new makeData(`https://img-b.udemycdn.com/course/240x135/15305_0987_6.jpg`, `Chief Financial Officer Leadership`, `Blair Cook CPA, CA MBA `, 4.5, 455, `(148524)`, 2499);
let obj2 = new makeData(`https://img-b.udemycdn.com/course/240x135/17782_50e2_14.jpg`, `Master Your Mind And Brain`, `Anette Prehn`, 4.5, 455, `(34532)`, 3452)
let obj3 = new makeData(`https://img-b.udemycdn.com/course/240x135/20241_f580_5.jpg`, `Customer Service Training`, `Webucator Training`, 4.5, 455, `(44321)`, 2134)
let obj4 = new makeData(`https://img-b.udemycdn.com/course/240x135/23972_35ee_13.jpg`, `Improve Communication`, `Michael Williams`, 4.4, 455, `(34542)`, 4326)
let obj5 = new makeData(`https://img-b.udemycdn.com/course/240x135/25671_f3b1_4.jpg`, `How to Write An Effective Reaseach Paper`, `Mohhammad noori`, 4.5, 455, `(123531)`, 908)
let obj6 = new makeData(`https://img-b.udemycdn.com/course/240x135/25671_f3b1_4.jpg`, `Proffessional Techniqual Writting`, `Ugur Akinci,PhD`, 4.5, 455, `(51432)`, 8712)
let obj7 = new makeData(`https://img-b.udemycdn.com/course/240x135/26589_aaad_7.jpg`, `Novel Writting WorkShop`, `Steve Alcorn`, 4.5, 455, `(41321)`, 1243)
let obj8 = new makeData(`https://img-b.udemycdn.com/course/240x135/28903_4884_3.jpg`, `Story Telling For Buisness`, `Kevin Allison`, 4.6, 455, `(90222)`, 874)
let obj9 = new makeData(`https://img-b.udemycdn.com/course/240x135/33949_3a7e_5.jpg`, `Directing the Actor:A USC course`, `Nina Foch, RAndal KieSer`, 4.6, 455, `(43567)`, 1567)
let obj10 = new makeData(`https://img-b.udemycdn.com/course/240x135/34268_4bc5_16.jpg`, `Qms Auditor`, `Sandeep Kumar`, 4.6, 455, `(34674)`, 5082)

let BussinesCourses = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];
const Bussinessdata = () => {
    return BussinesCourses;
}


//                    <---Js Slider Data------------------------------->
let jsobj1 = new makeData(`https://img-b.udemycdn.com/course/240x135/63612_8797_4.jpg`, `1 Hour JavaScript`, `John Bura`, 4.5, 455, `(64646)`, 7623)
let jsobj2 = new makeData(`https://img-b.udemycdn.com/course/240x135/364426_2991_6.jpg`, `JS: Underdstanding the eird Parts`, `Anthony Alicea`, 4.7, 455, `(134674)`, 4845)
let jsobj3 = new makeData(`https://img-b.udemycdn.com/course/240x135/405818_aa3f_3.jpg`, `JavaScript For Beginners`, `Edwin Diaz, Coding Faculty Solutions`, 4.5, 455, `(75000)`, 3538)
let jsobj4 = new makeData(`https://img-b.udemycdn.com/course/240x135/426196_3cb8_4.jpg`, `JavaScript from Beginner to Expert`, `Arkadiusz Wlodarczyk`, 4.4, 455, `(86774)`, 4538)
let jsobj5 = new makeData(`https://img-b.udemycdn.com/course/240x135/584494_f309_6.jpg`, `JavaScript for Kids: Code for your Own Game`, `Bryson Payne`, 4.5, 455, `(94674)`, 3543)
let jsobj6 = new makeData(`https://img-b.udemycdn.com/course/240x135/670034_ce04_6.jpg`, `Advnced JavaScript`, `Asim Hussain`, 4.7, 455, `(234674)`, 3563)
let jsobj7 = new makeData(`https://img-b.udemycdn.com/course/240x135/846270_0c09_6.jpg`, `JavaScript JSON AJAX API data for web pages Objects Arrys`, `Laurence Svekis`, 4.6, 455, `(89674)`, 4548)
let jsobj8 = new makeData(`https://img-b.udemycdn.com/course/240x135/851712_fc61_6.jpg`, `The Complete JavaScipt Course 2022`, `Jonas Scchmedtmann`, 4.7, 455, `(43532)`, 3432)
let jsobj9 = new makeData(`https://img-b.udemycdn.com/course/240x135/860812_f16e_23.jpg`, `JavaScript Beginner Bootcamp(2022)`, `Rob Merrill`, 4.4, 455, `(346743)`, 3562)
let jsobj10 = new makeData(`https://img-b.udemycdn.com/course/240x135/861624_864d_2.jpg`, `ES6 JavaScript: The Complete Developer's Guide`, `Stephen Grider`, 4.7, 455, `(93477)`, 3432)

let jsCourses = [jsobj1, jsobj2, jsobj3, jsobj4, jsobj5, jsobj6, jsobj7, jsobj8, jsobj9, jsobj10];

const jsdata = () => {
    return jsCourses;
}

    //               <---Top JS DATa---------------->
    let topjs1 = new makeData(`https://img-b.udemycdn.com/course/240x135/1565838_e54e_15.jpg`, `The Complete 2022 Web Development Bootcamp`, `Dr Angela Yu`, 4.7, 455, `(34674)`, 4748)
    let topjs2 = new makeData(`https://img-b.udemycdn.com/course/240x135/1430746_2f43_10.jpg`, `The Complete WebDeveopment  in 2022:Zero to Mastery`, `Andrei Nagoie`, 4.7, 455, `(45354)`, 4564)
    let topjs3 = new makeData(`https://img-b.udemycdn.com/course/240x135/2634490_e343_2.jpg`, `The Modern Javascript Bootcamp Courses(2022)`, `Colt Steele,Stephen Grider`, 4.7, 455, `(78923)`, 4743)
    let topjs4 = new makeData(`https://img-b.udemycdn.com/course/240x135/764164_de03_2.jpg`, `The Complete Web Developer Course 2.0`, `Rob Percival Codestars by Rob Percival`, 4.5, 455, `(89043)`, 5742)
    let topjs5 = new makeData(`https://img-b.udemycdn.com/course/240x135/1650610_2673_6.jpg`, `The Complete Junior to Senior Web Developer Roadmap(2022)`, `Anrei Neagoie`, 4.7, 455, `(90321)`, 4749)
    let topjs6 = new makeData(`https://img-b.udemycdn.com/course/240x135/3030132_afb3_2.jpg`, `JavaScript Web Projects: 20 projects`, `Anderi Negoriua,JAtino Woung`, 4.7, 455, `(890234)`, 2337)
    let topjs7 = new makeData(`https://img-b.udemycdn.com/course/240x135/1218586_9f86.jpg`, `The Advance Web Development Boot Camp`, 4.4, 455, `(134674)`, 4752)
    let topjs8 = new makeData(`https://img-b.udemycdn.com/course/240x135/3598684_c319_5.jpg`, `10 Mega Responsive Websites with HTML,CSS,and JavaScripts`, `Code And Create George Lomidze`, 4.5, 455, `(53312)`, 4538)
    let topjs9 = new makeData(`https://img-b.udemycdn.com/course/240x135/818990_57c0_3.jpg`, `Git a Web Developer JOB: materring The Modern Workflow `, `Brad schiff`, 4.6, 455, `(334674)`, 4748)
    let topjs10 = new makeData(`https://img-b.udemycdn.com/course/240x135/4246614_5387_3.jpg`, `30+ webprojects with HTML CSS ANS JS `, `Code And Create ,Jorgie`, 4.5, 455, `(89474)`, 2337)

    let topjsCourses = [topjs1, topjs2, topjs3, topjs4, topjs5, topjs6, topjs7, topjs8, topjs9, topjs10];
    const topjsdata = () => {
        return topjsCourses;
    }

export {
    pythondata,
    viewdata,
    Bussinessdata,jsdata,topjsdata
};