const div1 = document.getElementById('div1')
const div2 = document.querySelector('#div2')
const div3 = document.getElementById('div3')
const div4 = document.querySelector('#div4')
let change = false

div1.addEventListener("click", () => {
    if (change==false){
        div1.style.backgroundColor="black"
        change = true
    }
    else if (change===true){
        div1.style.backgroundColor="blue"
        change = false
    }
})

div2.addEventListener("click", () => {
    if (change==false){
        div2.style.backgroundColor="black"
        change = true
    }
    else if (change===true){
        div2.style.backgroundColor="red"
        change = false
    }
})

div3.addEventListener("click", () => {
    if (change==false){
        div3.style.backgroundColor="black"
        change = true
    }
    else if (change===true){
        div3.style.backgroundColor="green"
        change = false
    }
})

div4.addEventListener("click", () => {
    if (change==false){
        div4.style.backgroundColor="black"
        change = true
    }
    else if (change===true){
        div4.style.backgroundColor="yellow"
        change = false
    }
})
