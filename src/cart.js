export default function (ul) {
    if (ul) {
        ul.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.classList.contains('button')) {
                const parent = e.target.parentNode;
                const p2 = +parent.children[1].innerText;
                const totalAmount = document.querySelector('.totalAmount');
                const totalPrice = document.querySelector('.totalPrice');
                totalAmount.innerText = (+totalAmount.innerText) + 1;
                totalPrice.innerText = (+totalPrice.innerText) + p2;
            }
        })
    }
}