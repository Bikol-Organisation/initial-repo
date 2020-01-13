$(document).ready(function() {

    $("#konto").click(function(){
        var user = window.location.search.substring(1);
        window.open("konto.html?" + user,"_self");
        //alert(query);
    });

    $("#wroc").click(function(){
        var user = window.location.search.substring(1);
        window.open("contacts.html?" + user,"_self");
        //alert(query);
    });

    $("#pomoc").click(function(){
        alert("TA APKA JEST ZBYT PROSTA");
    });

});