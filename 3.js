// let d1 = document.getElementById('d1');
// d1.setAttribute('draggable', 'true');

// let area = document.getElementById('area');

// area.ondragenter = f1 //зашли мышкой с обектом драгбл
// area.ondragleave = f2 //вышли мышкой с обьектом драгбл
// area.ondragover = f3 // считает время нахождения
// area.ondrop = f4 // сбрасывает в место куда назначили
let pear = document.getElementsByClassName('pear')
let apple = document.getElementsByClassName('apple')
let area = document.getElementById('area');
let area2 = document.getElementById('area2');
let out = document.getElementById('out');

for (i of apple) {
    i.setAttribute('draggable', 'true')
    i.ondragstart = start
}
for (i of pear) {
    i.setAttribute('draggable', 'true')
    i.ondragstart = start
}

let fordrop = document.getElementsByClassName('fordrop')
for (i of fordrop) {
    i.ondragenter = f1
    i.ondragleave = f2
    i.ondragover = f3
    i.ondrop = f4


}
let fordrop1 = document.getElementsByClassName('fordrop1')
for (i of fordrop1) {
    i.ondragenter = f1
    i.ondragleave = f2
    i.ondragover = f3
    i.ondrop = f4


}
let kvadrat
function start() {
    let id = this.id
    console.log(id)
    kvadrat = document.getElementById(id)

}


function f1() {
    console.log('enter')
}
function f2() {
    console.log('leave')
}
function f3(event) {
    console.log('over')
    event.preventDefault()
}

function f4() {
    console.log('drop')
    this.appendChild(kvadrat) //фиксирование обьекта в другом обекте но нужно в овере прописывать строчку выше в функции event.preventDefault() 
    let parentDiv = document.getElementById("area");
    let parentDiv1 = document.getElementById("area2");
    let childDiv0 = document.getElementById("d1");
    let childDiv = document.getElementById("d2");
    let childDiv1 = document.getElementById("d3");
    let childDiv2 = document.getElementById("d4");

    if (parentDiv.contains(childDiv) && parentDiv.contains(childDiv1) && parentDiv.contains(childDiv2) || parentDiv1.contains(childDiv) && parentDiv1.contains(childDiv1) && parentDiv1.contains(childDiv2)) {
        alert("Молодец!")
    }
    
    





}








