$(document).ready(function(){
    $("#login-butt").click(function(){      
        var username = $("#username").val();
        var password = $("#password").val();
        var dataString = "&username=" + username + "&password=" + password;
        //alert(dataString);
        
        $.ajax({
              type: "POST",
              //UWAGA NA URL!!
              url: "http://localhost/bikol/login_check.php",
              data: dataString,
              crossDomain: true,
              cache: false,
              beforeSend: function() {
                  $("#login-butt").val('Loguje...');
              },
              success: function(data) {
                  if (data != "error") {
                      window.open("contacts.html?" + data,"_self")
                  } 
                  else {
                      alert("error");
                  }
              }
        });
    });
  });