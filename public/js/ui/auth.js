window.onload = init;

function init() {

  var e = {};

  e.fields = {
    username : $('#fn-auth-fields-username'),
    password : $('#fn-auth-fields-password')
  };

  e.buttons = {
    signIn   : $('#fn-auth-buttons-signin')
  };

  e.buttons.signIn.click(function(event) {
    event.preventDefault();
    var data = {
      username : e.fields.username.val(),
      password : e.fields.password.val()
    };
    $.post('/auth', data, function(res) {
      console.log(res);
    });
  });

}