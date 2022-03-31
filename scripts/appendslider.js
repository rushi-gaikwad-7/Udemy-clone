

let dataarr = [
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg?Expires=1623204287&Signature=MisbPLc6WMpTtx5pGkcVzlglm9yyaSNhqhlVRvYvAmCK7GbxdiHPa5uQZNVVw8NW9zEe76pAJCAkPnAPGYauW57bOG4G9kNqvyPcYuFQYNiO-bKd5mO1BPz5yLs9Z4j9hF1~N-jXMzzt2Ml5bSXG~naNiw57wkvjusMXfbhJlh5iEyHvp7ZxCkLJTGh~dHeLTF7qQeFq6Uk5U0jjiEoAc2jtBmVP6HrahTNwW81q2DdHlIAWwKjYaIXB~hUZWXcFIlGZ4B2Qih17BE20VSAXrhHyu2lTls4uvXH1AbTJPqKWRfTBd58wKUdQMF9Mi~OCTkhxC3hmNkpU2rKpTnZRag__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "2021 Complete Python Bootcamp From Zero to Hero in Python",
      Author: "Jos Portilla",
      rating: 4.6,
      people: 144000,
      price: 455,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-b.udemycdn.com/course/240x135/950390_270f_3.jpg?secure=-BvfNab4X_3v9C_B3CNtow%3D%3D%2C1623204286",
      course_name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
      Author: "Kiril Eremenko,Hadelen De Ponteves kjkdf kjndkfjskdnfkj",
      rating: 4.5,
      price: 455,
      people: 146559,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg?Expires=1623204291&Signature=Hv8tA769HhSOPvmIiaXfdGbGCiKqrhwaB9TOGOvOs5G8pRB9BRXj3H3WRZC8CN-b-8ug~rE7Yl5QqZgsw4OYvtt6nij6S8hTDWJV8R010KU7QxsL76fYA3Ds4HifUcaDbi~189288sClkurzZiuA~jc3XQwEX2bvHVbLVwzp0ozjAT~mKZ5F2B0xREPxbQJ5fHRzsx61h8OEb88aXB16kWjbf62s8UmDa-oRHQZgtX6vt288jFyD5qnvPNx7XKKu3E5oPJlIb-0~UX6Q8yhdmbtlNtwuMtGCokx7tTpXIowCjRwC5HLRbrfABsjpMfWLg2vAA7C17nYDGJYoIW14Gw__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Python for Data Science and Free Machine Learning Bootcamp",
      Author: "Jose Portilla",
      rating: 4.6,
      price: 455,
      people: 100777,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg?Expires=1623247476&Signature=Oka46u0QNEXCjKQQ0q1Ei6YNxzu529XVILGu3nbjsqLGZ3YQv7yUQZSd4yDWCb96X3CS0VU0eF8-~WNhdE3zCnkYEyGCg7AEJFu3QhcqzDo0~Iei0kTKgy2v8DyZNe2-~D5cwPuUkmdWM~RFcsQawrck078i7tl9uVVCSEW0miQazPqOxXttd2rkFjPtT5vebDIQLMuGfvy-ji75G7aKQvwsUA30yBDoe1jlIKjwcpcaSkFD1fMZO1A0-AhnNxD~9z-Goa6Nwya7~C2YlPlyadIVG40DWGGC0XhbLeawapQQJpMyl-o12UEnCTKlazMcDSdIlHYpRl6h0uLFprK~vA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Learn Python Programming Masterclass",
      Author: "Tim Buchalka,Jean-Paul Roberts,Tim Buchalka Learn Programming Academy",
      rating: 4.5,
      price: 455,
      people: 76088,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/692188_9da7_21.jpg?Expires=1623250678&Signature=GgisOkvuiIUXmXv3ylF6F4IpY7VUpIJmnCwVYS0lpoD5Mki-zVY5o6YTEzPnFYNVm6o1CYpUOd3OuhX0931BmGn9Xw4B7chsMSA-S63h3wazZvYrqzgwQt-hs4lBVzDQhmHnbnRlXtYRJ1DirmgQX2K9ukLhFNEMHgPNYE01mTzdMH0SS1xsNWU3zzZAGn2-hJRrIz~vy9XPRx-5qZjJ43oQV54kk7F09YKYycplBrhgSTIJLsWCrSGgHiqJXpi67kRCt15J~p6oZvUX~pondCAvJALs4XRq~mTjkFe~MSJx8QBNniUK15PNtO2jCuZyYELECzNBS9tthv8tERFA5A__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "The Python Mega Course: Build 10 Real World Applications",
      Author: "Ardit Sulce",
      rating: 4.6,
      price: 455,
      people: 48960,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg?Expires=1623250678&Signature=INKyryMyXA42AR0TmQT46ZMa55Roo~CX9ryzICBQ3Av9mmohsYrV3eqh3sI4YbpDiok4pnI6yMrVtX04ARcGU43r8A83EcgVnBP0ZZ-nSO64W4czYAJyLlNNW2k-EDjQ3IHaVDXJM2KaM5lG6rDBMnH8ASph5vtEcglxooMF8tkNzbdSuS1nk4gqjb99ZfsMAsZswyu8J-mV3m171w-CBf0lhb-jhJERqpKNWWwoaz4yTG~3eFVsAuxqL1qlKmque2f5VGlYXlZxP9a9rWX7iX09n0L9TpbTMd0esY08xd4yWRL4Dj4J3GWxcwNK0fTJ5Q4enAy9gfdxvTrQ2zihBA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Learning Python for Data Analysis and Visualization",
      Author: "Jose Portilla",
      rating: 4.4,
      price: 455,
      people: 16300,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-b.udemycdn.com/course/240x135/2776760_f176_5.jpg?secure=JdcWiK_8ql_e-xH4yJzSrQ%3D%3D%2C1623250678",
      course_name: "100 Days of Code - The Complete Python Pro Bootcamp for 2021",
      Author: "Dr. Angela Yu",
      rating: 4.7,
      price: 455,
      people: 32611,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg?Expires=1623252068&Signature=kWkAC2QEO1V0m2vyRFx~ssR774y3FGOpJWNmr0EyvkeWd6UTbOcdnpmYQA6~WK1wJDpULcr1aH2TAEdUNMdEof03MspT6N~VzMIBv~fp7VlnvYn~SZ3zS3z0qKQsuQwNjsNLGimehilHmeSyEEN1KXwZulxeSK8DIzRqaUfIxS9x5asGkpjyPCIXCa6tBcVPVARf-a54bB7ABo7~KTJY9Np-nFYUuFsDexPz34GYfzsqLV0Qn40T5gjlJEtqh5kLERSWef0~H29GmWXtQTN7sQhSk5wbpdOw1S46gKlpW4GGFHJ14MCBKDE0vaY0RMPqUdg4YGoy2JjJNrpp1L7ogg__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Automate the Boring Stuff with Python Programming",
      Author: "Al Sweigart",
      rating: 4.6,
      price: 455,
      people: 87866,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/822444_a6db.jpg?Expires=1623252068&Signature=hCt6ZPpcC0HV17a23HAo-a7RxDJOVpk1e468fHgoof7I3QbI5rlNAf92MY5w5BLomePAFVQCEwlcV2m5YEyqheC51DNJ6fr27kJfs9vh-01Nahv~XkXRc3kzRQQp86DuyYsPekAPGxlHvsJHYdkW36-Cv6oyDEsHRe7RZVTQm9Ws5y7EBd8JLUmj4S5QSDYrYO~abAQJhZ5QI8lVrXpbQH-YAli5v50Rxq1jhIFg2Oacjf~7irqa6XQNWolA7K3mtyXdRxOE96K68ApEc7heIIXfntMrfScHStruB321jvC~-NPCJaTSz1CFyx7VMVuqfoNRVK4VEtX66h~lzl2nRA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Python and Django Full Stack Web Developer Bootcamp",
      Author: "Jose Portilla",
      rating: 4.6,
      price: 455,
      people: 38905,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/1212032_b7e8.jpg?Expires=1623252068&Signature=P~6JabDqANIkd0blDygZR4o0wH254AUhvU4udEytGFLUjT28VxrlsfGWxEp5rUZyDJTFrx2zi2iAozMyGR91UVpziglMbi6Xu2JUitJOJReARb7UCWJD4Lji3JdBkS9vC40SubX0rWH1mW6a-cMLadhDt~7idW8dqVS7fbBwXgFvJ9ZdZbW4mHCMTmQU8nT5~wzB2Q9Bz-ay21QNnMiRwjajkwaO7zQZ38Y1pJvXPFhgtJ754IumO9huBkaM8jPsMyIKJB3qP~H7c51JNaW9y6h0DKr3q3mzPJfj82-zYSYH3lahYU5L73vW2HbDieYm4YxFqwKWYQcvr~GqMd5TYQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Python for Financial Analysis and Algorithmic Trading",
      Author: "Jose Portilla",
      rating: 4.5,
      price: 455,
      people: 15555,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/1035472_23ce_5.jpg?Expires=1623252068&Signature=izWNw73UjGmcNxuMiDjt5PGWSWb~e6Qjp6MltGA8loe6qSV~pMszkw04KDVFU8e~1UZAHwqKEODLxd7dKygyDrWBE5KqlP8g4ql0ayM7nuxc4jMT4TfSJHS89~fdRXEX6j6n95AFRVjJtandSr6zgFceOP0z6G~FZs33GKmoh0Uhs90YYNjzynT2c1DglohTRok5QsRvSUZOkKQn48VmpLt-t~SADT6WtC8DHTTqS6HhD~0Gzur4BoKcVhbsefgBfZBpY16-eCqkYg~JQar1xjVtKQuMb6ooHi4dNEYRC-SclUrS10-J43ut-30BzVdW7f6B3zM3mKK965swueIvGA__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Python for Finance: Investment Fundamentals & Data Analytics",
      Author: "365 careers",
      rating: 4.5,
      price: 455,
      people: 21854,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    },
    {
      img_source: "https://img-c.udemycdn.com/course/240x135/2473048_8255_5.jpg?Expires=1623252068&Signature=YCIf8tPLGeuSN0RpPJdogZgv1y5vYSmgiBXmJ7XBJozfsWS2gGnz7hywXt8PGbeeltC2eQ0q6Ei-8lRa2CS4j2cGKMUwCmx7RcKbwh9doslzRfudwDK8aQw3C-3K8E7QsyZBD5MWZ7IUtT9vBFazXw2S3wrxFwyG1CrzcVD1BAYkuZGnSI1JPIEyBknqiX8tpSKRy9GJe-6eFSXeQYyHWL32tQQ-~qrjKu-OXJSRF0--B-EwXWMF~025A~uYQ1skDXpnMMToebw-8hWAZCyJzjsIbkCuDumHJwiwWUbbqlRf-y9UlXfVxP7JUKY89b7U~WXJ0Y714KfIz8K624sjJQ__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
      course_name: "Complete Python Developer in 2021: Zero to Mastery",
      Author: "Andrei Neagoi",
      rating: 4.7,
      price: 455,
      people: 27911,
      mainPrice: 4550,
      updatedDate: "November 2021",
      totalHoursOfVideo: 10,
      courseHeading: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"
    }
  ];

const Devlop = (data) => {
console.log(data)
        let box = document.createElement('div');
        let name = document.createElement('p');
        name.innerText = data.course_name;
        let discrip = document.createElement('p');
        let updated = document.createElement('p');
        updated.innerText = data.updatedDate;
        box.append(name,discrip,updated)
    return box.innerHTML;
}

function appendslider(data,parent){
    parent.innerHTMl="";
    data.map((el,i)=>{
        let box = document.createElement("div");
        let hoverbox = document.createElement("div");
        hoverbox.id="hoverbox";
        hoverbox.innerHTML=`${Devlop(dataarr[i])}`
        let subbox = document.createElement("div");
        box.setAttribute("id","slidercontent")
        let courseimage= document.createElement("img");
        courseimage.src= el.image;
        let title=  document.createElement("h4");
        title.innerText=el.title;
        let instructor= document.createElement("p");
        instructor.innerText=el.instructor;
        let rating= document.createElement("h5");
        rating.innerText=el.rating;
        let ratingdiv= document.createElement('div');
        let ratingqty= document.createElement("p");
        ratingqty.innerText=el.totalsale;
        let rating_img= document.createElement("img");
        rating_img.setAttribute("id","ratingpic")
        if(el.rating<4.5){
            rating_img.src= `https://th.bing.com/th/id/OIP.O3wbiD5XgCTesLXWdwoh5QHaBi?pid=ImgDet&w=480&h=100&rs=1`
        }else if(el.rating==4.5){
            rating_img.src= `https://th.bing.com/th/id/R.7f71a02152c2e86b399ca55ac4208a11?rik=43%2biuqEjTNXppg&riu=http%3a%2f%2fi1.wp.com%2fsupplementpolice.com%2fwp-content%2fuploads%2f2017%2f04%2f46stars_small.png&ehk=eD26%2b28nDqOEyjHuzvl50ZrP5vk0FU0Vl9nDF7syIl4%3d&risl=&pid=ImgRaw&r=0`
        }else if(el.rating>4.5){
            rating_img.src= `https://garagegympro.com/wp-content/uploads/2019/03/4-7-stars-rating.jpg`
        }
        ratingdiv.append(rating,rating_img,ratingqty);
        let pricebox= document.createElement("div");
        let price= document.createElement("h4");
        price.innerText="Rs "+el.price;
        let stprice= document.createElement("s");
        stprice.innerText="Rs"+el.stprice;
        pricebox.append(price,stprice)
        subbox.append(title,instructor,ratingdiv,pricebox)
        box.append(hoverbox,courseimage,subbox);
        parent.append(box);
    })
 }

 export default appendslider;