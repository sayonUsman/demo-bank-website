document.getElementById('login-btn').addEventListener('click', function(){
    const emailAdrress = document.getElementById('user-email');
    const password = document.getElementById('password');

    if (emailAdrress.value === 'sayonusman.ma@gmail.com' && password.value === 'sayon111') {
        window.location.href = 'bank_account.html';
    }

    else{
        alert('Your username or password invalid.');
    }
});
