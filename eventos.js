const div = document.querySelector('.elDiv')

div.addEventListener('click', () => {
    alert("Hola! Soy el div")
})

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(event) {
    event.stopPropagation();
})