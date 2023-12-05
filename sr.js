// https://api.jsonbin.io/v3/qs/656f4e750574da7622d0a141

class SR {
    constructor(group, op) {
        this.group = group;
        this.op = op;
    }


}

groups = new Array();

async function populate() {
    const requestURL = "https://api.jsonbin.io/v3/qs/656f4e750574da7622d0a141";
    
    const request = new Request(requestURL);
    const response = await fetch(request);
    if (response.ok) {
        const gr = await response.json();
        
        newGroup(gr.record);
        showHeader();
        showGroup();
    }
    else {
        alert("Помилка HTTP:" + response.status);
    }
    

}

function newGroup(obj) {
    let gr = obj;
    for (a of gr){
        let gro = new SR(a.group, a.op);
        groups.push(gro);

    }
}

function showHeader(){
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.innerHTML = "Список груп";
    header.appendChild(myH1);
}

function showGroup(){
    const main = document.querySelector('article');
    const div121 = document.createElement('div');
    const div122 = document.createElement('div');
    const div123 = document.createElement('div');
    const myH2121 = document.createElement('h2');
    const myH2122 = document.createElement('h2');
    const myH2123 = document.createElement('h2');
    myH2121.textContent = "Освітня програма №121";
    myH2122.textContent = "Освітня програма №122";
    myH2123.textContent = "Освітня програма №123";
    const myList121 = document.createElement('ul');
    const myList122 = document.createElement('ul');
    const myList123 = document.createElement('ul');
    for (g of groups){
        const listItem = document.createElement('li');
        listItem.textContent = g.group;
        if (g.op == 121){
            myList121.appendChild(listItem);
        }
        else if (g.op == 122){
            myList122.appendChild(listItem);
        }
        else if (g.op == 123){
            myList123.appendChild(listItem);
        }
    }
    div121.appendChild(myH2121);
    div121.appendChild(myList121);

    div122.appendChild(myH2122);
    div122.appendChild(myList122);

    div123.appendChild(myH2123);
    div123.appendChild(myList123);

    main.appendChild(div121);
    main.appendChild(div122);
    main.appendChild(div123);
}
populate();