<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <title>Contacts</title>
        <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700">
        <link rel="stylesheet" href="assets/css/styles.css">
    </head>

    <body>
        <div id="container">
            <div id="homescreen">
                <div id = "header">
                    <div id = "settings">
                        <img src="Projekt_grafiki/Kontakty/Przyciski_emotki/PNG/Przycisk_ustawienia_kontakty.png" id = "settings_icon">
                    </div>
                    <div id = "search">
                        <img src="Projekt_grafiki/Kontakty/Przyciski_emotki/PNG/Lupka.png" id = "search_icon">
                    </div>
                </div>
                <div id="contacts">
                <?php
                    // PHP START

                    // POLACZENIE Z BAZA DANYCH
                    require_once "connect.php";
                    $connection = @new mysqli($host, $db_user, $db_password, $db_name, $db_port);
                    if ($connection->connect_errno!=0)
                    {
                        echo "CONNECTION Error";
                    }
                    else
                    {
                        // POBIERANIE WSZYSTKICH KONTAKTOW
                        $sql = "SELECT * FROM contacts";
                        if($result = @$connection->query($sql))
                        {
                                // DZIELENIE NA KOLEJNE KONTAKTY
                                while ($row = $result->fetch_assoc()) {
                                    $name = $row['name'];
                                    $surname = $row['surname'];
                                    $availability = $row['availability'];

                                    date_default_timezone_set("Europe/Warsaw");

                                    // SPRAWDZANIE CZY OSOBA JEST DOSTEPNA
                                    $date = date('H:i');
                                    $time = explode(" ",$availability);
                                    if($time[0] < $date && $date < $time[2])
                                    {
                                        $class1 = "status_positive";
                                        $class2 = "positive_icon";
                                        $img_src = "Projekt_grafiki/Kontakty/Przyciski_emotki/PNG/emotka_zla_dobra_kontakty.png";
                                    }
                                    else
                                    {
                                        $class1 = "status_negative";
                                        $class2 = "negative_icon";
                                        $img_src = "Projekt_grafiki/Kontakty/Przyciski_emotki/PNG/emotka_zla_kontakty.png";
                                    }
                                    //
                                    // DODAWANIE OSOBY
echo<<<END
                                    <div class="contact">
                                        <div class="avatar">
                                    
                                        </div>
                                        <div class="name">
                                            $name$surname
                                        </div>
                                        <div class="$class1"> 
                                            <img src="$img_src" class="$class2">
                                        </div>
                                    </div>
END;
                                // 
                                }
                            $result->free_result();
                        }
                        $connection->close();
                    }
                    // END OF PHP
                ?>
                </div>
            </div>
        </div>

    </body>
</html>