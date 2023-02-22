// Variables

const 
subjectInput = document.querySelector('#subject'),
formInput = document.querySelector('form'),
emailInput = document.querySelector('#email'),
messageInput = document.querySelector('#message'),
sendBtn = document.querySelector('#sendBtn'),
resetBtn = document.querySelector('#resetBtn');

// Events
document.addEventListener('DOMContentLoaded', init)
emailInput.addEventListener('blur', validateform)
subjectInput.addEventListener('blur', validateform)
messageInput.addEventListener('blur', validateform)
resetBtn.addEventListener('click', () => {
    formInput.reset()
})
formInput.addEventListener('click', (e) => {
    e.preventDefault
})

// functions

// TITLE : init
// disabled sendBtn
function init(){
    sendBtn.disabled = true
}

// TITLE : validateForm
function validateform(){
        // if input value isn't empty :
    if ( this.value.length > 0 ){
                // if input type is email :
        if(this.type == 'email'){
                        // if emailInput includes '@'
            if(this.value.includes('@')){
                // change color to green
                changeColor(this , 'valid' , 'invalid')
            }else{
                // if emailInput doesn't includes '@', change color red
                changeColor(this , 'invalid' , 'valid')
            }
        }else{
                        // if input type is not email, change color to green
            changeColor(this , 'valid' , 'invalid')
        }
    }else{
        
        // if input value is empty , change color to red
        changeColor(this , 'invalid' , 'valid')
    }
    checkSendBtnStatus()
}

// TITLE : check sendBtn status
function checkSendBtnStatus(){
    // if email
    if( emailInput.classList.contains('valid') && subjectInput.classList.contains('valid') && messageInput.classList.contains('valid') ){
        sendBtn.disabled = false
    }else{
        sendBtn.disabled = true
    }
}

// TITLE : colorChange
// el : add and remove class in itself
// prev : name of the class to add in el
// next : name of the class to remove from el
function changeColor( el , prev , next ){
    el.classList.add(prev)
    el.classList.remove(next)
}