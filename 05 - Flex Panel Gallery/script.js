const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open');
}

function toggleActive(event) {
    console.log(event.propertyName);
    if(event.propertyName.includes('flex')){ // safari에서는 flex, 타 browser에선 flex-grow라서
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));