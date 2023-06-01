// for (let i; i < 5; i++){
//     div[i] = Input[i]
// }
let wrapper = document.querySelector('.scored');
let number = document.getElementById('number')
let name = document.getElementById('name')
let score = document.getElementById('score')
let spawn = document.getElementById('spawn')
let comments = document.getElementById('comments')

let fromStorage = localStorage.getItem('main');
if (fromStorage) {
    document.querySelector('.scored').innerHTML = fromStorage;
}



let add = function(taskString) {
    yapoimy1 = number.value
    yapoimy2 = name.value
    yapoimy3 = score.value
    yapoimy4 = spawn.value
    yapoimy5 = comments.value
    wrapper.innerHTML += `<div class="list">
    <div class="stats_input">${yapoimy1}</div>
    <div class="stats_input">${yapoimy2}</div>
    <div class="stats_input">${yapoimy3}</div>
    <div class="stats_input">${yapoimy4}</div>
    <div class="stats_input">${yapoimy5}</div>
    <button class="del"></button></div>`;
    localStorage.setItem('main', document.querySelector('.scored').innerHTML);
}

let button = document.getElementById('push')
button.addEventListener('click', add)

let fff = document.querySelectorAll('.stats_input')


let deleting = function(){
    let delbutton = document.querySelectorAll('.del')
    delbutton.forEach((btn) => {
        btn.addEventListener('click', () => {
        btn.parentElement.remove();
        localStorage.setItem('main', document.querySelector('.scored').innerHTML);
        });
    }); 
    localStorage.setItem('main', document.querySelector('.scored').innerHTML);
}



button.addEventListener('click', deleting)
let del = document.querySelectorAll('.del')

for (var i = 0 ; i < del.length; i++) {
    del[i].addEventListener('click', deleting) ; 
}

// учесть тот факт что нужно будет 
//переделать уджаление что
// бы оно удалялось из памяти тоже
