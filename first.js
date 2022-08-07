// Step 1
// Create onload handeler
window.onload = () => {
    main();
};
function main() {
    const root = document.getElementById('root');
    const btn =   document.getElementById('change-btn');
    btn.addEventListener('click' , function(){
        const bgColor = generateRGBColor();
        root.style.backgroundColor =bgColor;
    });
}

// Step 2 -Ganarate random colour function
function generateRGBColor() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`
}



// step 3 -collact all neccerrary reference



// Step 4-click event












