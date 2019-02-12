const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // console.log(this.dataset); <- 뭔지 한 번 봐봐..
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach (input => input.addEventListener('change', handleUpdate));
inputs.forEach (input => input.addEventListener('mousemove', handleUpdate));