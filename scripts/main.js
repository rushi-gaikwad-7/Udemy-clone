
 const getdata = async(url)=>{

    let id=document.querySelector('input').value;


try{
 let res = await fetch(url,{
     method:"GET",
     headers:{
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic Q0xHdEl2UHNOdFpCa0JqeVZLdDBTdTd2RVpOUFk1dmljbEZESGRmYzo1ejBTUDNYVGxtVXpKb3pTUGZSdkhya0V6eDh3YlJJRkdjQ3dZTzNrM3ZhMjFIWXdjeVlkaUlpWW01RW5sbEdnZFlDTXFzN3IyYU91dkQ3NGx2WlRudDJuZU03aTR5a1pqRG9NbmJuSUJxS2pjdTJsWWtrZmgyT0k2MkRib1E1bw==",
        "Content-Type": "application/json;charset=utf-8"
      }
   
 });
    data= await res.json();
    console.log(data);
    return data;

}
catch(e){

 console.log("hello")

}

 }


const appendArticles= async(articles, main) =>{

    main.innerHTML = null;

    articles.forEach(el => {
        let box = document.createElement('div');
        box.addEventListener("click", () => {

            localStorage.setItem("article", JSON.stringify(el));
            window.location.href = "/blog.html"
        });

        let title = document.createElement('h3');
        title.innerText = el.title;
        let description = document.createElement('p');
        description.innerText = el.description;
        let img = document.createElement('img');
        img.src = el.urlToImage;
        box.append(img, title, description);
        main.append(box);
    });


}

export { getdata, appendArticles }