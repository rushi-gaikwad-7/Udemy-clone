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

const Devlopment = (dataarr, subdata) => {

    let box = document.createElement('div');
    dataarr.forEach(data => {
        let box1 = document.createElement('div');
        box1.id = "web";
        let subbox = document.createElement('div');
        subbox.id = "webdevlopHover";
        subbox.innerHTML = `${subDevlopment(subdata)}`;
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
        let name = document.createElement('p');
        name.innerText = data;
        let icon = document.createElement('i');
        icon.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
        box1.append(name, icon)
        box.append(box1);

    });
    return box.innerHTML;
}
export {
    Devlopment,
    Devlop
};