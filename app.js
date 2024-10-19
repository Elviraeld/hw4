let form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let myForm = new FormData(e.target);
    console.log("Name: " + myForm.get('user-info'));
    console.log("Surname: " + myForm.get('usersurname'));
    
})