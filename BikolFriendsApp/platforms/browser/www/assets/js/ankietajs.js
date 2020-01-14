$(document).ready(function(){
    $("#zat-button").click(function(){

        var username = window.location.search.substring(1);
        var availability = $("#availability").val();

        if(availability == ""){
            alert("Uzupelnij pole!");
            return false;
        }
        
        var correctAvailRegex = /^([01]\d|2[0-3]):([0-5]\d) - ([01]\d|2[0-3]):([0-5]\d)$/;
        var dataString;
        
            if(availability.match(correctAvailRegex)){
              // godziny są git
              dataString = "&username=" + username + "&availability=" + availability + "&update=";           
              $.ajax({
                    type: "POST",
                    url: "http://localhost/bikol/ankietaphp.php", //https://bikolapka.000webhostapp.com/insert.php
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function() {
                        $("#zat-button").val('Przesyłam...');
                    },
                    success: function(data) {
                        if (data == "success") {
                            alert("zmieniono");
                            window.open("ustawienia.html?" + username,"_self");
                        } 
                        else if (data == "error") {
                              alert("Blad!");
                              window.open("ustawienia.html?" + username,"_self");
                        }
                    }
              });
              }else{
                alert("Zly format godzin (przyklad: 16:00 - 20:00");
              }      
    });
  });