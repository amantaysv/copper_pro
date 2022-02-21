//get modal element
var modal = document.getElementById('modal');
var modalBtn = document.getElementById('modalBtn');
console.log(modalBtn);
//get close btn
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//to open modal
modalBtn.addEventListener('click', openModal);

//to close modal
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

//func to open modal
function openModal(){
    modal.style.display = 'block';
}

//func to close modal
function closeModal(){
    modal.style.display = 'none';
}

//func to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}