# endpoints
 
## GET/POST /contacts.php
 
Content-Type: `application/json`
 
Zwraca JSONową tablicę obiektów typu `user` z polami:
 - `number:str`
 - `name:str` - Imię i nazwisko usera
 - `username:str` - login usera
 - `availability:int` - `0` - niedostępny bądź `1` - dostępny
 
 ### Przykład
 
 ```json
 GET /contacts.php
 
 [
     {
     "number":"129231432",
     "name":"Zenek Martyniuk",
     "username":"Zenobi620",
     "availability":0
    },
    {
     "number":"129214432",
     "name":"Mama Mama",
     "username":"poprostumama",
     "availability":1
    }
 ]
```
 
 
## POST insert.php
 
Content-Type: `x-www-form-urlencoded`
 
Dodaje nowego znajomego. Przyjmuje argumenty podane jako body dokumentu w formacie `x-www-form-urlencoded`, czyli zmiennych rozdzielanych ampersandem np. `zmienna1=...&zmienna2=...`
 
nazwy parametrów i ich typy:
 - `phone:str`
 - `username:str`
 - `firstName:str`
 - `lastname:str`
 - `password:str`
 - `availability:str` - godziny dostępności zapisane w formacie HH:mm-HH:mm w strefie CET
 
zwraca `text/plain` `"success"` lub `"error"`
 
 
## POST login_check.php
 
Content-Type: `x-www-form-urlencoded`
 
Sprawdza czy user z takim hasłem istnieje w bazie. Jeżeli tak to zwraca `text/plain` `"success"` a gdy nie `"error"`
Przyjmuje argumenty podane jako body dokumentu w formacie `x-www-form-urlencoded`, czyli zmiennych rozdzielanych ampersandem np. `zmienna1=...&zmienna2=...`
 
 
nazwy parametrów i ich typy:
 - `password:str`
 - `username:str`
 
## POST kontophp.php
 
Content-Type: `x-www-form-urlencoded`
 
Zmienia hasło usera. Jeżeli zmiana się udała to zwraca `text/plain` `"success"` a gdy nie `"error"`
 
Przyjmuje argumenty podane jako body dokumentu w formacie `x-www-form-urlencoded`, czyli zmiennych rozdzielanych ampersandem np. `zmienna1=...&zmienna2=...`
 
 
nazwy parametrów i ich typy:
 - `password2:str` - stare hasło
 - `password2:str` - nowe hasło
 - `myusername:str` - nazwa usera  
 
 
## POST ankietaphp.php
 
Content-Type: `x-www-form-urlencoded`
 
Zmienia godziny dostępności usera. Jeżeli zmiana się udała to zwraca `text/plain` `"success"` a gdy nie `"error"`
 
Przyjmuje argumenty podane jako body dokumentu w formacie `x-www-form-urlencoded`, czyli zmiennych rozdzielanych ampersandem np. `zmienna1=...&zmienna2=...`
 
 
nazwy parametrów i ich typy:
 - `availability:str` - nowy okres w formacie HH:mm-HH:mm
 - `username:str` - nazwa usera
