$(document).ready(function ()
{
    // 1. laat een alert zien
    $('body').on('dblclick', function ()
    {
        alert('er wordt dubbel geklikt op de pagina');
    });

    // 2. laat de melding zien <p> je gaat nu over een link heen</p>
    $('a').on('mouseover', function ()
    {
        $('.main').append('<p>je gaat nu over een link heen</p>');
    });


    // 3. achtergrond kleur en tekst kleur van input veld
    $('#textfield').on('focus', function ()
    {
        $(this).css({ 'background-color': 'red', 'color': 'white' });
    });
    $('#textfield').on('blur', function ()
    {
        $(this).css({ 'background-color': 'white', 'color': 'black' });
    });


    // 4. naam erbij zetten met <li>
    $('#textfield').on('blur', function ()
    {
        $('#naamlijstje').append('<li>' + $('#textfield').val());
    });

    // 5. extra events
    $(document).keyup(function (key)
    {
        switch (parseInt(key.which, 10))
        {
            case 37:
                $('#kappa').animate({ left: '-=10px' }, 'fast');
                break;
            case 38:
                $('#kappa').animate({ top: '-=10px' }, 'fast');
                break;
            case 39:
                $('#kappa').animate({ left: '+=10px' }, 'fast');
                break;
            case 40:
                $('#kappa').animate({ top: '+=10px' }, 'fast');
                break;
        }
    })

    $('#button').click(function ()
    {
        $('#pepe').append('<img src="pepe.png" alt="pepe">');
    });

    $('#textfield').on('change', function ()
    {
        $('#pogchamp').append('<img src="kappapride.png" alt="pride">');
    });

    $(document).on('scroll', function ()
    {
        $('#biblethump').append('<img src="biblethump.png" alt="cry">');
    })
});