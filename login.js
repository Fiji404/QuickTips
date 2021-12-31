  let username = document.querySelector('.user-input');
  let password = document.querySelector('.password-input');
  let userlabel = document.querySelector('.user-label');
  let focused = document.getElementById('focused');
  let passwordlabel = document.querySelector('.password-label');
  const static = document.querySelector('.static');
  const passwordbtn = document.querySelector('.password-toggle');
  let menubtn = document.querySelector('.menu-icon');
  let nav = document.querySelector('nav > ul');
  let prop1 = document.querySelector('.first');
  let prop2 = document.querySelector('.two');
  let prop3 = document.querySelector('.three');
  let registeropt = document.querySelector('.register-option');
  let formregister = document.querySelector('.form--register');
  let formlogin = document.querySelector('.form--login');

  username.addEventListener('blur', (event) => {
    username.classList.add("touched")
  }, true);
  
  password.addEventListener('blur', (event) => {
    password.classList.add("touched")
  }, true);
  // fix label position
   username.addEventListener('blur', function (event) {
    userlabel.classList.toggle('lift', username.value)
    }, true);
    password.addEventListener('blur', function (event) {
    passwordlabel.classList.toggle('change', password.value)
    }, true); 
    function change(){
      if (password.type === 'password') {
          password.setAttribute('type', 'text');
          passwordbtn.classList.add('icon')
      }
      else {
        password.setAttribute('type', 'password');
        passwordbtn.classList.remove('icon')
      }
    }
    password.addEventListener('input', ({target: {value} }) => {
      passwordbtn.classList.toggle('visible', !!value);
      password.classList.toggle('focused', !!value)
    });
    menubtn.addEventListener('click', function() {
  nav.classList.toggle('active');
  prop1.classList.toggle('prop1');
  prop2.classList.toggle('prop2');
  prop3.classList.toggle('prop3');
});

registeropt.addEventListener('click', function() {
  formlogin.classList.add('hide')
  formregister.classList.add('active');

})
