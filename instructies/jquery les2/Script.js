// TIJDENS DE INSTRUCTIE EN DE OPDRACHTEN MAG JE DE HTML-PAGINA NIET WIJZIGEN!

// Uitvoeren nadat de gehele pagina geladen is
$('document').ready(function ()
{
    $('h1').addClass('red');

    $('h2:first').html('selectoren & DOM-aanpassingen');

    $('tr:odd').addClass('grey');
});