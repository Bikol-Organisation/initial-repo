$(document).ready(function(){
  $("#login-button").click(function(){    
      var phoneNumber = $("#phonenumber").val();
      phoneNumber.replace(/\s+/g, '');
      phoneNumber.replace('+','');
      
      var fullName = $("#userfullname").val();
      var spl = fullName.split(" ");
          alert('Podaj imię oraz nazwisko po spacji');
          return false;
      }
      var firstName = spl[0];
      var lastName = spl[1];
      
      var username = $("#username").val();
      var password = $("#password").val();
      var passwordConfirm = $("#password_confirm").val();
      var availability = $("#availability").val();
      
      var correctPhoneNumberRegex = /^([+]\d{9,}|\d{9,})/;
      var correctAvailRegex = /^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/;

      var dataString;
      if(phoneNumber.match(correctPhoneNumberRegex)){
        // numer jest git
        if(password.length == 0 || passwordConfirm.length == 0){
          // puste hasło
          alert("Password is empty!");
        }else if(password != passwordConfirm){
          // różne hasła
          alert("Passwords don't match")
        }else{
          // hasła są git
          if(availability.match(correctAvailRegex)){
            // godziny są git
            dataString = "phone=" + phoneNumber + "&firstName=" + firstName + "&lastName=" + lastName + "&username=" + username + "&password=" + password + "&availability=" + availability + "&insert=";      
          //alert(dataString);      
          $.ajax({
                type: "POST",
                url: "https://bikolapka.000webhostapp.com/insert.php",
                data: dataString,
                crossDomain: true,
                cache: false,
                beforeSend: function() {
                    $("#login-button").val('Przesyłam...');
                },
                success: function(data) {
                    if (data == "success") {
                        alert("inserted");
                        $("#login-button").val('Zatwierdź');
                    } 
                    else if (data == "error") {
                          alert("error");
                    }
                }
          });
          }else{
            // godziny nie są git
            alert("Wrong availability format (example: 16:00 - 20:00");
          }     
        }
      }else{
        // numer jest źle
        alert("Wrong number format");
      }     
  });
});