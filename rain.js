const button=document.querySelector("button");
const body=document.querySelector('body');
const color=['pink','red','orange','yellow','skybule','green','volet'];
body.style.backgroundColor='black';
document.addEventListener('click',changeColor)
function changeColor(){
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
}