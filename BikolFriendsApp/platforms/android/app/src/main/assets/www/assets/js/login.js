$(document).ready(function(){
    $("#login-butt").click(function(){      
        var username = $("#username").val();
        var password = $("#password").val();
        var dataString = "&username=" + username + "&password=" + password;
        //alert(dataString);
        
        $.ajax({
              type: "POST",
              //UWAGA NA URL!!
              url: "https://bikolapka.000webhostapp.com/login_check.php",
              data: dataString,
              crossDomain: true,
              cache: false,
              beforeSend: function() {
                  $("#login-butt").val('Loguje...');
              },
              success: function(data) {
                  if (data == "success") {
                      window.open("contacts.html","_self")
                  } 
                  else if (data == "error") {
                      alert("Blad logowania!");
                  }
              }
        });
    });
  });