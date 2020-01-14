$(document).ready(function(){
    $("#login-button").click(function(){    
        var phoneNumber = $("#phonenumber").val();
        phoneNumber.replace(/\s+/g, '');
        phoneNumber.replace('+','');
        
        var fullName = $("#userfullname").val();
        var spl = fullName.split(" ");
        var firstName = spl[0];
        var lastName = spl[1];
        var username = $("#username").val();
        var password = $("#password").val();
        var passwordConfirm = $("#password_confirm").val();
        var availability = $("#availability").val();
        
        var correctPhoneNumberRegex = /^([+]\d{9,22}|\d{9,22})/;
        var correctAvailRegex = /^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/;
        var correctNameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
  
        var dataString;
        if(phoneNumber.length != 0 && firstName.length != 0 && lastName.length != 0 && username.length != 0 && password.length != 0 &&
          passwordConfirm.length != 0 && availability.length != 0){
            // żadne pole nie jest puste
            if(phoneNumber.match(correctPhoneNumberRegex)){
              // numer jest git
              if(firstName.match(correctNameRegex) && lastName.match(correctNameRegex)){
                // imię i nazwisko jest git
                if(password == passwordConfirm){
                  // hasła są git
                  if(availability.match(correctAvailRegex)){
                    // godziny są git
                    dataString = "phone=" + phoneNumber + "&firstName=" + firstName + "&lastName=" + lastName + "&username=" + username + "&password=" + 
                    password + "&availability=" + availability + "&insert=";
  
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
                    // godziny nie sa git
                    alert("Zły format godzin dostępności! Przykładowy poprawny format: 16:00 - 18:00. Pamiętaj o spacjach przy myślniku.");
                  }
                }else{
                  // hasła nie są git
                  alert("Hasła są różne!");
                }
              }else{
                // imie i nazwisko nie jest git
                alert("Zły format imienia i nazwiska! Możesz używać tylko wielkich i małych liter.")
              }
            }else{
              // numer nie jest git
              alert("Zły format numeru! Podaj numer w postaci minimum 9 cyfr.")
            }
          }else{
            // jedno lub więcej pole jest puste
            alert("Pola nie mogą być puste!");
          }     
    });
  });