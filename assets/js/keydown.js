const key = document.getElementById('key')
const input = document.getElementById('input')
let color = ""
input.addEventListener('input', ()=> {
    let globalVariable = ''
    if (input.value==='a'){
        globalVariable = 'rosado'
        console.log(globalVariable)
        key.style.backgroundColor="pink"
    }
    else if(input.value==='s'){
        globalVariable = 'naranja'
        console.log(globalVariable)
        key.style.backgroundColor="orange"
    }
    else if(input.value==='d'){
        globalVariable = 'celeste'
        console.log(globalVariable)
        key.style.backgroundColor="skyblue"
    }
    else if(input.value==='q'){
        createNewDiv("purple")
        globalVariable = 'morado'
        console.log(globalVariable)
    }
    else if(input.value==='w'){
        createNewDiv("gray")
        globalVariable = 'gris'
        console.log(globalVariable)
    }
    else if(input.value==='e'){
        createNewDiv("brown")
        globalVariable = 'cafe'
        console.log(globalVariable)
    }
})

function createNewDiv(color){
    const newDiv = document.createElement('div')
    newDiv.style.width = "200px";
    newDiv.style.height = "200px";
    newDiv.style.margin = "60px";
    newDiv.style.backgroundColor = color;
    newDiv.style.border = "solid 1px black"
    document.body.appendChild(newDiv);
}