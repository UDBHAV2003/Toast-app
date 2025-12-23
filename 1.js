const horizontal=document.querySelector('#horizontal')
const verticle=document.querySelector('#vertical')
const message=document.querySelector('#message-symbol')
const input=document.querySelector('#text-container')
const range=document.querySelector('#range')
const buttonClick=document.querySelector('.process-toastMessage')
const toastMessage_outside=document.querySelector('.show-toastMessage')
const showRange=document.querySelector('#range-value')
const main=document.querySelector('main')



buttonClick.addEventListener('click',()=>{
    // debugger
    if(horizontal.value==='right'){
        toastMessage_outside.classList.add('right')
    }
    else{
        toastMessage_outside.classList.remove('right')   
       
    }if(vertical.value==='bottom'){
        toastMessage_outside.classList.add('bottom')
    }
    else{
        toastMessage_outside.classList.remove('bottom')
    }


    const newToast_messageContainer= document.createElement('div')
    newToast_messageContainer.classList.add('toast-messageContainer',message.value)

   let icon = '';
switch (message.value) {
  case 'success': icon = '✔️'; break;
  case 'error': icon = '❌'; break;
  case 'warning': icon = '⚠️'; break;
  case 'info': icon = 'ℹ️'; break;
}

newToast_messageContainer.innerHTML = `
  <span class="toast-icon">${icon}</span>
  <span class="toast-text">${input.value}</span>
`
    // newToast_messageContainer.innerText= `${input.value}`
    toastMessage_outside.appendChild(newToast_messageContainer);


    const duration = parseInt(range.value) * 1000 || 3000;
  setTimeout(() => {
    newToast_messageContainer.remove();
    resetForm()
  }, duration);

  



})






  input.addEventListener('input', () => {
    
    // Enable button if input is not empty after trimming
    buttonClick.disabled = input.value.trim() === '';
  });




  // Get references to the range input and the span
// const rangeInput = document.getElementById("range");
// const rangeValue = document.getElementById("range-value");

// Set default value to 1
debugger
range.value = 1;
showRange.textContent = range.value;

// Update the value on input
range.addEventListener("input", () => {
  showRange.textContent = range.value;
});



// Reset form
function resetForm() {
  horizontal.value = "left";
  vertical.value = "Top";
  message.value = "success";
  input.value = "";
  range.value = 1;
  showRange.textContent=range.value

  // showRange.textContent = ` ${range.value}s`;
  showButton.disabled = true;
}
