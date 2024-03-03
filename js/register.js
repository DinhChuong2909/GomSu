const pwBtn = document.querySelector('.eyebtn');
const confirmPwBtn = document.querySelector('.eyebtn-two');

const open = () => {
  const pw = document.getElementById('password');
  if (pw.type === 'password') {
    pw.type = 'text';
  }
  else {
    pw.type = 'password';
  }
  pwBtn.classList.toggle('show');
};

confirmPwBtn.addEventListener('click', () => {
  const confirmPw = document.getElementById('confirm-password');
  if (confirmPw.type === 'password') {
    confirmPw.type = 'text';
  }
  else {
    confirmPw.type = 'password';
  }
  confirmPwBtn.classList.toggle('show');  
});

