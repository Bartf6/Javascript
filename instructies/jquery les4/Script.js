$(document).ready(function ()
{
    var teksten = [
    // Afbeelding1
    "Merk: Samsung",
    // Afbeelding2
    "voorkant",
    // Afbeelding3
    "voorkant 2",
    // Afbeelding4
    "achterkant",
    // Afbeelding5
    "zijkant"];

    $('#strip').on('click', 'img', function ()
    {
        var source = $(this).attr('src');

        $('#container img').fadeOut('fast', function ()
        {
            $(this).attr('src', source).fadeIn('fast');
        });
    });

    // FUNCTIE 1
    $('#strip').on('dblclick', 'img', function ()
    {
        var alt = $(this).attr('alt');
        alert(alt);
    });

    // FUNCTIE 2
    var imageNr = $(this).attr('alt');
    imageNr = imageNr.charAt(imageNr.length - 1) - 1;

    $('p').html(teksten[imageNr]);
});