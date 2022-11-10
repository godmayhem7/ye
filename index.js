document.querySelector(".sun").addEventListener("click",()=>{
     document.querySelector(".moon").classList.remove("none")
     document.querySelector("body").classList.remove("body")
     document.querySelector("body").classList.add("body-sub")
     document.querySelector("#inputs").classList.add("input-field-sub")
     document.querySelector("#inputs").classList.remove("input-field")
     document.querySelector("#first-sect").classList.remove("first-section")
     document.querySelector("#first-sect").classList.add("first-section-sub")
     document.querySelector("article").classList.remove("article")
     document.querySelector("article").classList.add("article-sub")
     document.querySelector(".description").style.background="hsl(236, 33%, 92%)"
     document.querySelector(".sun").classList.add("none")   
})

document.querySelector(".moon").addEventListener("click",()=>{
    document.querySelector(".moon").classList.add("none")
    document.querySelector("body").classList.add("body")
    document.querySelector("body").classList.remove("body-sub")
    document.querySelector("#inputs").classList.remove("input-field-sub")
     document.querySelector("#inputs").classList.add("input-field")
     document.querySelector("#first-sect").classList.add("first-section")
     document.querySelector("#first-sect").classList.remove("first-section-sub")
     document.querySelector("article").classList.add("article")
     document.querySelector("article").classList.remove("article-sub")
     document.querySelector(".description").style.background="hsl(235, 24%, 19%)"
    document.querySelector(".sun").classList.remove("none")   
})