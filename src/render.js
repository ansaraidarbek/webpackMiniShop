const addEll = (ul, el) => {
    const li = document.createElement('li');
    li.innerHTML = `                
        <p class="name">${el.name}</p>
        <p class="price">${el.price}</p>
        <button class="button" id = "${el.id}">buy</button>`
        ul.append(li);
}

export default function render(ul, data) {
    ul.innerHTML = '';
    data.forEach(el => {
        addEll(ul, el);
    });
}