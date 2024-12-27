let hr = document.querySelector('.hr')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let body = document.querySelector('body')


setInterval(() => {
    let time= new Date()
    hr.textContent = time.getHours()
    min.textContent = time.getMinutes()
    sec.textContent = time.getSeconds()
}, 1000);


