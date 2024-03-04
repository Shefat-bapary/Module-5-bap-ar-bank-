document.getElementById('btn-submit').addEventListener('click', function(){
    // always remember to use .value to get text from an input field
    const mailField = document.getElementById('user-mail');
    const userMail  = mailField.value;

    const passwordField = document.getElementById('user-passworld');
    const userPassword  = passwordField.value;
    
    
    // DO NOT VERIFY EMAIL PARSSWORD ON THE CLINT SITE (THAT USE FOR FUN DON'T TAKE IT SERIOUSLY)
    if(userMail === 'owner@company.com' && userPassword === 'Shefat bapari'){
        console.log('valid user')
        window.location.href = 'bank.html';
    }
    else{
       alert('invalid user')
    }
})