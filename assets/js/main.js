let count;
const btn = document.getElementById("btn");

const canvas = document.getElementById("can");
const ctx = canvas.getContext('2d');

let timer = setInterval(draw, 1);
const d = new Date();

let px = 0;
let py = 0;

console.log(localStorage.getItem("sCount"))

//Check if we have already saved a count
if (localStorage.getItem("sCount") == null) {
    localStorage.setItem("sCount", 0);
    count = 0
} else {
    count = parseInt(localStorage.getItem("sCount"));
    btn.innerText = count;
}


//When the button is clicked increase the count and update
btn.addEventListener("click", ()=>{
    count = count + 1;
    localStorage.setItem("sCount", count);
    btn.innerText = count;
})

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(Date.now(),10,30);

    px = (Math.sin(Date.now() / 1000) * canvas.width / 2) + canvas.width / 2;
    py = (Math.cos(Date.now() / 1000) * canvas.height / 2) + canvas.height / 2;

    ctx.fillStyle = "green";
    ctx.fillRect(px - 5,py - 5,10,10);

}