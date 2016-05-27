$('document').ready(function ()
{
    $('.answer1').hide();
    $('.answer2').hide();
    $('.answer3').hide();

    $('#vraag1').click(function ()
    {
        $('.answer1').toggle();
    });

    $('#vraag2').click(function ()
    {
        $('.answer2').toggle();
    });
    $('#vraag3').click(function ()
    {
        $('.answer3').toggle();
    })
});