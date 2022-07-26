let count;
const btn = document.getElementById("btn");

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