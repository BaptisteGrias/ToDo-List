const form = document.querySelector('form');
const list = document.querySelector('ul');
const input = document.querySelector('form input');

let allToDoList = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (text !== '') {
        addList(text);
        input.value = '';

    }

})

function addList(text){
    const todo = {
        text,
        id: Date.now()
    }
    showList(todo);
}

function showList(todo){

    const item = document.createElement('li');
    item.setAttribute('data-key', todo.id);

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.addEventListener('click', todoEnd)
    item.appendChild(input);

    const txt = document.createElement('span');
    txt.innerText = todo.text;
    item.appendChild(txt);

    const btn = document.createElement('button');
    btn.addEventListener('click', removeList);
    const img = document.createElement('img');
    img.setAttribute('src', 'ressources/delete.svg');
    btn.appendChild(img);
    item.appendChild(btn);

    list.appendChild(item);
    allToDoList.push(item);
}

function todoEnd(e){
   e.target.parentElement.classList.toggle('todoEnd');
}

function removeList(e){
    allToDoList.forEach(el => {
        if(e.target.parentNode.getAttribute('data-key') === el.getAttribute('data-key')){
            el.remove();
        allToDoList = allToDoList.filter(li => li.dataset.key !== el.dataset.key);
        }
    })
}