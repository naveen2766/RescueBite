let usernameEl=document.getElementById('username');
let resNameEl=document.getElementById('resName');
let resEmailEl=document.getElementById('resEmail');
let resPasswordEl=document.getElementById('resPassword');
let backBtnEl=document.getElementById('backBtn');
let registration=document.getElementById('registration');
let submitBtnEl=document.getElementById('submitBtn');
let ConfirmPasswordEl=document.getElementById('ConfirmPassword');
let ConfirmMessageEl=document.getElementById('ConfirmMessage');

submitBtnEl.onclick=function(){
    if(resPasswordEl.value!=ConfirmPasswordEl.value){
        ConfirmMessageEl.textContent='Passowd not matched';
    }
    else{
        ConfirmMessageEl.textContent='';
    }
}

//registration.addEventListener('submit',(event)=>{
  //  event.preventDefault();
//});



backBtnEl.onclick=function(){
    backBtnEl.textContent='Done!';
    window.location.href='./index.html';
}
