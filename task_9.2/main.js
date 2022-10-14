function setBgColor() {
    const now = new Date();
    seconds = now.getSeconds();
    console.log(seconds);
    document.body.style.backgroundColor = `rgb(${seconds * 10 % 255}, ${seconds * 100 % 255}, ${seconds * 1000 % 255})`;
}