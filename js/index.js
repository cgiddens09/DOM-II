// LOGO--MOUSEENTER EVENT
const logo = document.querySelector('h1');
logo.addEventListener('mouseenter', (event) => {
    logo.style.color = 'blue';
    logo.style.transform = 'scale(1.2)'
   event.stopPropagation();
});

logo.addEventListener('mouseleave', () => {
    logo.style.color = 'black';
    logo.style.transform = 'scale(1.0)';
})

const logo2 = document.querySelector('.container');
logo2.addEventListener('mouseover', () => {
    logo2.style.backgroundColor = 'pink';
    
})


//navigation links rotate
document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.transform = 'rotate(7deg)';
});
})

//preventDefault

const stopLink = document.querySelector('.nav-link');
stopLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('stopped the link');
})

//page load
window.addEventListener('load', e => {
    alert('Page Loaded Successfully');
})

// bus image
const bus = document.querySelector('.intro img');
bus.addEventListener('mousedown', () => {
    bus.style.transform = 'scale(1.3)';
})
bus.addEventListener('mouseup', () => {
    bus.style.transform = 'scale(1.0)';
})

//body color
const bod = document.querySelector('body');
bod.addEventListener('dblclick', e => {
    bod.style.backgroundColor = 'rebeccapurple';
})

//orientation change
window.addEventListener('orientationchange', () => {
    alert('You changed the orientation');
})

//copy
const copier = document.querySelector('.text-content');
copier.addEventListener('copy', () => {
    copier.style.color = 'red';
})


window.addEventListener('resize', () => {
    alert('put me back!');
})
