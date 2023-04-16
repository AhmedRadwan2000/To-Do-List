const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const deleteButton = document.querySelector('.delete');
const unchecked = document.querySelector('.unchecked');
const checked = document.querySelector('.checked');

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const img1 = document.createElement('img');
        const img2 = document.createElement('img');
        img1.src = 'img/unchecked.png';
        img1.className = 'unchecked';
        img2.src = 'img/delete.png';
        img2.className = 'delete';
        p.textContent = input.value;
        li.appendChild(img1);
        li.appendChild(p);
        li.appendChild(img2);
        list.appendChild(li);
        input.value = '';
        savaData();
    }
});

list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentNode;
        list.removeChild(li);
        savaData();
    }
    else if (e.target.className == 'unchecked') {
        e.target.parentNode.style.textDecoration = 'line-through';
        e.target.src = 'img/checked.png';
        e.target.className = 'checked';
        savaData();
    }
    else if (e.target.className == 'checked') {
        e.target.parentNode.style.textDecoration = 'none';
        e.target.src = 'img/unchecked.png';
        e.target.className = 'unchecked';
        savaData();
    }
});

function savaData() {
    localStorage.setItem('list', list.innerHTML);
}

function restoreData() {
    const storedData = localStorage.getItem('list');
    if (storedData) {
        list.innerHTML = storedData;
    }
}

restoreData();
