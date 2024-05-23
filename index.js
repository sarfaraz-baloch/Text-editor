var text = document.getElementById('text')
var btn = document.getElementsByClassName('btn')
var font_size = document.getElementById('font_size')
var transform = document.getElementById('transform')

transform.addEventListener('change' , function(){
    if(this.value == 'monospace'){
        text.style.fontFamily = 'monospace'
    }
    if(this.value == 'serif'){
        text.style.fontFamily = 'serif'
    }
    if(this.value == 'sans-serif'){
        text.style.fontFamily = 'sans-serif'
    }
})

font_size.addEventListener('change' , function(){
    if(this.value == 'heading'){
        text.style.fontSize = '20px'
    }
    if(this.value == 'SubHeading'){
        text.style.fontSize = '25px'
    }
    if(this.value == 'Normal'){
        text.style.fontSize= '15px'
    }
})



function bold () {  
    // text.style.fontWeight= 'bold'

    if(text.style.fontWeight == 'bold'){
        text.style.fontWeight= 'normal'
    }else{
        text.style.fontWeight= 'bold'
    }
}

function italic () {  
    // text.style.fontWeight= 'bold'

    if(text.style.fontStyle == 'italic'){
        text.style.fontStyle= 'normal'
    }else{
        text.style.fontStyle= 'italic'
    }
}


function underline () {  
    // text.style.fontWeight= 'bold'

    if(text.style.textDecoration == 'underline'){
        text.style.textDecoration= 'none'
    }else{
        text.style.textDecoration= 'underline'
    }
}



function align_right () {  
    // text.style.fontWeight= 'bold'

    if(text.style.textAlign == 'right'){
        text.style.textAlign= 'start'
    }else{
        text.style.textAlign= 'right'
    }
}


function align_left () {  
    // text.style.fontWeight= 'bold'

    if(text.style.textAlign == 'left'){
        text.style.textAlign= 'start'
    }else{
        text.style.textAlign= 'left'
    }
}

function align_justify () {  
    // text.style.fontWeight= 'bold'

    if(text.style.textAlign == 'center'){
        text.style.textAlign= 'start'
    }else{
        text.style.textAlign= 'center'
    }
}


// heading.addEventListener("click", ()=>{
//     console.log("tesst")
// })