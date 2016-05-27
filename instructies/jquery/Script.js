$(document).ready(function ()
{
    // array met HTML-elementen
    var selectorOptie = ['h1', 'p'];


    // array elementen in dropdownlist plaatsen
    // append is het toevoegen van een html code aan een element zonder dat je het weghaalt
    for (i = 0; i < selectorOptie.length; i++)
    {
        $('select').append('<option value="' + selectorOptie[i] + '">' + selectorOptie[i] + '</option>');
    }

    // uitvoeren als geselecteerde waarde is geselecteerd
    $('select').change(function ()
    {
        $('*').removeClass('red');
        var selecteren = $('select').val();
        $(selecteren).addClass('red');
    });
});