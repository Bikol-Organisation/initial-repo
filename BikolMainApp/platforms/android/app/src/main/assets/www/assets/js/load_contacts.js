$(document).ready(function() {
                var url = "https://bikolapka.000webhostapp.com/contacts.php";
                $.getJSON(url, function(result) {
                        $.each(result, function(i, field) {
                            var name = field.name;
                            var surname = field.surname;
                            var availability = field.availability;
                            var number = field.number;
                            var link = "https://wa.me/" + number;

                            if(availability == "1"){
                                var class1 = "status_positive";
                                var class2 = "positive_icon";
                                var imgsrc = "Projekt_grafiki/Kontakty/Przyciski_emotki/PNG/emotka_zla_dobra_kontakty.png";
                            }
                            else{
                                var class1 = "status_negative";
                                var class2 = "negative_icon";
                                var imgsrc = "Projekt_grafiki/Kontakty/Przyciski_emotki/PNG/emotka_zla_kontakty.png";
                            }
                        $("#contacts").append('<div class="contact"  onclick="location.href=\''+link+'\'"> <div class="avatar"> </div> <div class="name">' + name + surname + '</div> <div class="'+ class1 + '">  <img src="'+ imgsrc + '" class="'+ class2 + '"> </div> </div>');
                    });
                });
            });