  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let label = document.querySelector('.label');
  let focused = document.getElementById('focused');
  let label2 = document.querySelector('.label2');
  const static = document.querySelector('.static');
  const eye = document.querySelector('.eye-wrapper');
  let menubtn = document.querySelector('.menu-icon');
  let nav = document.querySelector('nav > ul');
  let prop1 = document.querySelector('.first');
  let prop2 = document.querySelector('.two');
  let prop3 = document.querySelector('.three');

  username.addEventListener('blur', (event) => {
    username.classList.add("touched")
  }, true);
  // 2nd event for password 
  password.addEventListener('blur', (event) => {
    password.classList.add("touched")
  }, true);
  // fix label position
   username.addEventListener('blur', function (event) {
    label.classList.toggle('lift', username.value)
    }, true);
    //fix second label positon
    password.addEventListener('blur', function (event) {
    label2.classList.toggle('change', password.value)
    }, true); 
    //Show&Hide password, and change icon feature
    function change(){
      if (password.type === 'password') {
          password.setAttribute('type', 'text');
          eye.classList.add('icon')
      }
      else {
        password.setAttribute('type', 'password');
        eye.classList.remove('icon')
      }
    }
    //Showing and hide icon feature
    password.addEventListener('input', ({target: {value} }) => {
      eye.classList.toggle('visible', !!value);
      //Input stay focused when inside have words
      password.classList.toggle('focused', !!value)
    });
    menubtn.addEventListener('click', function() {
  nav.classList.toggle('active');
  prop1.classList.toggle('prop1');
  prop2.classList.toggle('prop2');
  prop3.classList.toggle('prop3');
});
