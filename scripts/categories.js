const Devlop = (dataarr) => {

    let box = document.createElement('div');
    dataarr.map(function(data,i,arr){
        if (i > 6) {
            return box.innerHTML;
        }
        let name = document.createElement('p');
        name.innerText = data;
        box.append(name)
    })
    
    return box.innerHTML;
}

const Devlopment = (dataarr,subdata) => {
console.log(subdata);
    let box = document.createElement('div');
    dataarr.map(function(data,i,arr){
        let box1 = document.createElement('div');
        box1.id = "web";
        let subbox = document.createElement('div');
        subbox.id = "webdevlopHover";
        if(i<2){
        subbox.innerHTML = `${subDevlopment(subdata[i])}`;}
        let name = document.createElement('p');
        name.innerText = data;
        let icon = document.createElement('i');
        icon.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
        box1.append(name, icon, subbox)
        box.append(box1);
    });
    return box.innerHTML;
}

const subDevlopment = (dataarr) => {

    let box = document.createElement('div');
    dataarr.forEach(data => {
        let box1 = document.createElement('div');
        box1.id = "web";
        let ancor=document.createElement('a');
      ancor.href="/JavaScriptPage/javascript.html"
        let name = document.createElement('p');
        name.innerText = data;
        let icon = document.createElement('i');
        icon.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
        ancor.append(name);
        box1.append(ancor, icon);
        box.append(box1);

    });
    return box.innerHTML;
}
export {
    Devlopment,
    Devlop
};