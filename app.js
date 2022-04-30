
const toggleSwitch= document.querySelector('.switch')
const checkbox= document.querySelector('.checkbox')
const pgOne= document.getElementById('pg1')
const span= document.querySelector('#nxtpg')



toggleSwitch.addEventListener('change',function(){
    if(checkbox.checked == true){
        pgOne.style.backgroundColor= 'rgb(41, 51, 70)'

    }else {
        // dark()
        pgOne.style.backgroundColor= 'black'
    }
})

span.onmouseover =function(){
    // span.style.fontSize= 48
    span.style.color= 'grey'
    
}
span.onmouseout = function(){

    span.style.color= 'white'
}
span.addEventListener('click',function(){
    scroll(0,1000)
})