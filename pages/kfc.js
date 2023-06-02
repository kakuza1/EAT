// for (let i; i < 5; i++){
//     div[i] = Input[i]
// }
let wrapper = document.querySelector('.scored');
let number = document.getElementById('number')
let name = document.getElementById('name')
let score = document.getElementById('score')
let spawn = document.getElementById('spawn')
let comments = document.getElementById('comments')

let fromStorage = localStorage.getItem('hui');
if (fromStorage) {
    document.querySelector('.scored').innerHTML = fromStorage;
}



let add = function(taskString) {
    yapoimy1 = number.value
    yapoimy2 = name.value
    yapoimy3 = score.value
    wrapper.innerHTML += `<div class="list">
    <div class="stats_input solo">${yapoimy1}</div>
    <div class="stats_input solo">${yapoimy2}</div>
    <img src="${yapoimy3}" alt="" class = "solo">
    <button class="del solo"></button></div>`;
    localStorage.setItem('hui', document.querySelector('.scored').innerHTML);
}

let button = document.getElementById('push')
button.addEventListener('click', add)

let fff = document.querySelectorAll('.stats_input')


let deleting = function(){
    let delbutton = document.querySelectorAll('.del')
    delbutton.forEach((btn) => {
        btn.addEventListener('click', () => {
        btn.parentElement.remove();
        localStorage.setItem('hui', document.querySelector('.scored').innerHTML);
        });
    }); 
    localStorage.setItem('hui', document.querySelector('.scored').innerHTML);
}



button.addEventListener('click', deleting)
let del = document.querySelectorAll('.del')

for (var i = 0 ; i < del.length; i++) {
    del[i].addEventListener('click', deleting) ; 
}

// учесть тот факт что нужно будет 
//переделать уджаление что
// бы оно удалялось из памяти тоже
