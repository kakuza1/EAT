// for (let i; i < 5; i++){
//     div[i] = Input[i]
// }
let sound = document.getElementById("Sound");
let container = document.getElementById("header");

container.addEventListener("mouseover", function(event) {
  if (event.target.classList.contains("block")) {
    sound.play();
  }
});


let wrapper = document.querySelector('.scored');
let photo = document.getElementById('photo')
let name = document.getElementById('name')
let score = document.getElementById('score')
let link = document.getElementById('link')
let comments = document.getElementById('comments')

let fromStorage = localStorage.getItem('hui2');
if (fromStorage) {
    document.querySelector('.scored').innerHTML = fromStorage;
}


let deleting = function(){
    let delbuton = document.querySelectorAll('.del');
    // let b = confirm('удалить?');
    if (confirm('удалить?')){
        delbuton.forEach((delbuton) => {
            delbuton.addEventListener('click', () => {
            delbuton.parentElement.remove();
            localStorage.setItem('hui2', document.querySelector('.scored').innerHTML);
            });
        }); 
        localStorage.setItem('hui2', document.querySelector('.scored').innerHTML);
    }
}

let g = document.querySelector('.ggg')


let obnova = function(){
    let neww = document.querySelectorAll('.add');
    let yapoimy5 = link.value
    let yapoimy2 = score.value
    let jopa = `<a class="stats_input duo second" href="${yapoimy5}">卐 - ${yapoimy2}</a>`
    jopa = jopa.ELEMENT_NODE
    if (confirm('удалить?')){
        ading.forEach((ading) => {
            ading.addEventListener('click', () => {
            console.log(ading.parentNode)
            let bbb = ading.ELEMENT_NODE
            let sss = ading.parentNode
            sss.innerHTML += `<a class="stats_input duo second" href="${yapoimy5}">卐 - ${yapoimy2}</a>`
            console.log(sss)
            localStorage.setItem('hui2', document.querySelector('.scored').innerHTML);
            // sss.insertBefore(jopa, bbb)
            // localStorage.setItem('hui', document.querySelector('.scored').innerHTML);
            });
        }); 
        localStorage.setItem('hui2', document.querySelector('.scored').innerHTML);
    }
}

// $('.add').append(jopa);

let add = function() {
    yapoimy1 = name.value
    yapoimy2 = score.value
    yapoimy3 = photo.value
    yapoimy4 = comments.value
    yapoimy5 = link.value
    wrapper.innerHTML += `<div class="list">
    <div class="stats_input solo">${yapoimy1}</div>
    <div class="stats_input solo">${yapoimy2}</div>
    <img src="${yapoimy3}" alt="" class = "solo">
    <div class='ggg'><div class="stats_input duo first">${yapoimy4}</div>
    <a class="stats_input duo second" target="_blank" href="${yapoimy5}">卐 - ${yapoimy2}</a><button class="duo add"></button></div>
    <button class="del"></button></div>`;
    localStorage.setItem('hui2', document.querySelector('.scored').innerHTML);
}

let butonss = document.getElementById('push')
butonss.addEventListener('click', add)

// button.addEventListener('click', deleting)
let del = document.querySelectorAll('.del')

for (let i = 0 ; i < del.length; i++) {
    del[i].addEventListener('click', deleting) ; 
}



let ading = document.querySelectorAll('.add');
//  ading.addEventListener('click', e => {
//     let b = e.b;
//     b.

//  })
for (let i = 0; i < ading.length; i++){
    ading[i].addEventListener('click', obnova)
}
