
const toggleSwitch= document.querySelector('.switch')
const checkbox= document.querySelector('.checkbox')
const pgOne= document.getElementById('pg1')
const backgroundBtn= document.querySelector('.backgroundBtn')
const circle= document.getElementById('circle')


function light(){
    if(pgOne.style.backgroundColor='black'){
        pgOne.style.backgroundColor= 'white'
        // circle.style.backgroundColor= 'black'
        
    }
}
function dark(){
    if(pgOne.style.backgroundColor='white'){
        pgOne.style.backgroundColor= 'black'
        // circle.style.backgroundColor= 'white'
    }
}
toggleSwitch.addEventListener('change',function(){
    if(checkbox.checked == true){
        console.log('stuff happening')
        light()

    }else {
        console.log('stuff isnt')
        dark()
    }
})
backgroundBtn.addEventListener('click',function(){
    if(pgOne.style.backgroundColor='white'){
       dark()
    }
    else{
        light()
    }

})
    // if(checkbox.checked == true){
    //     if(pgOne.style.backgroundColor= 'black'){
    //         pgOne.style.backgroundColor = 'white'
    //     }
    //     else if(pgOne.style.backgroundColor= 'white'){
    //         pgOne.style.backgroundColor = 'black'
    //     }
    // }

const test= document.querySelector('.test')
test.addEventListener('click',function(){
    console.log(test.checked)
    if(test.checked == true){
        console.log('its checked')
    }else if(test.checked == false){
        console.log('its unchecked')
    }

})