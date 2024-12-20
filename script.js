//your JS code here. If required.
const div1 = document.querySelector("#square1")
const div2 = document.querySelector("#square2")
const div3 = document.querySelector("#square3")
const body = document.querySelector("body")
// const div = document.querySelectorAll("div")
// div1.style.backgroundColor = "#E6E6FA"
// div2.style.backgroundColor = "#E6E6FA"
// div3.style.backgroundColor = "#E6E6FA"
div1.addEventListener("mouseover", ()=>{
	div2.style.backgroundColor = "#6F4E37"
	div3.style.backgroundColor = "#6F4E37"
	div1.style.backgroundColor = "#E6E6FA"
})   
div2.addEventListener("mouseover", ()=>{
	div1.style.backgroundColor = "#6F4E37"
	div3.style.backgroundColor = "#6F4E37"
	div2.style.backgroundColor = "#E6E6FA"
})
div3.addEventListener("mouseover", ()=>{
	div1.style.backgroundColor = "#6F4E37"
	div2.style.backgroundColor = "#6F4E37"
	div3.style.backgroundColor = "#E6E6FA"
})
body.addEventListener("mouseout", ()=>{
	div1.style.backgroundColor = "#E6E6FA"
	div2.style.backgroundColor = "#E6E6FA"
	div3.style.backgroundColor = "#E6E6FA"
})
