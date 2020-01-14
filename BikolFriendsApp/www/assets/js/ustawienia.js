$(document).ready(function() {

    $("#konto").click(function(){
        var user = window.location.search.substring(1);
        window.open("konto.html?" + user,"_self");
        //alert(query);
    });

    $("#wroc").click(function(){
        var user = window.location.search.substring(1);
        window.open("index.html","_self");
        //alert(query);
    });

    $("#ankieta").click(function(){
        var user = window.location.search.substring(1);
        window.open("ankieta.html?" + user,"_self");
    });

    $("#pomoc").click(function(){
        alert("TA APKA JEST ZBYT PROSTA");
    });

});