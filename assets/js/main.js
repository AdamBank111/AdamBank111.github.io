let count = 0;
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    count = count + 1;
    btn.innerText = count;
})

function countUp(count) {
    count = count + 1
    document.getElementById("but").innerHTML = count;
}