$(document).ready(function(){
  $("#passch-button").click(function(){      
      
	  var myusername = window.location.search.substring(1);
	  var password1 = $("#password1").val();
	  var password2 = $("#password2").val();
	  if(password1 == password2 && password1.length > 3 && password2.length > 3){
      	  var dataString = "&myusername=" + myusername + "&password1=" + password1 + "&password2=" + password2 + "&update=";
	  }
	  else{
		 alert("Password is wrong. Required minimum 4 signs or same passwords in the brackets");
	  }
      $.ajax({
            type: "POST",
            url: "http://localhost/bikol/kontophp.php",
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function() {
                $("#passch-button").val('Przesyłam...');
            },
            success: function(data) {
                alert(data);
                if (data == "success") {
                    alert("hasło zostało poprawnie zmienione");
                    $("#passch-button").val('Zmień hasło');
		            window.open("ustawienia.html?" + myusername,"_self") // window.location.href = 'konto.html'; https://bikolapka.000webhostapp.com/
                } 
                else if (data == "error") {
                    alert("error");
		            window.open("ustawienia.html?" + myusername,"_self") //https://bikolapka.000webhostapp.com/
                }
            }
      });
  });
});
