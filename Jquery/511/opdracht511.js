var selectorOptions = ['p', 
'h1', 
'a', 
'.example',
 '.main',
  '#lijstje',
   '.main h2',
    'div h2', 
    'div > h2', 
    'div + h1', 
    ':text', 
    'p:first', 
    'p:even', 
    'p:odd', 
    'p:lt(3)', 
    'p:has(strong)', 
    'a[href=#]',  
    'a[href=www]', 
    ':checked', 
    ':disabled'];

//zodra de pagina geladen is
$(document).ready(function ()
{

    var selObj = $('select');
    //Alle selectorOptions worden als option toegevoegd aan de selectbox
    for (i = 0; i < selectorOptions.length; i++)
    {
        selObj.append('<option value="' + selectorOptions[i] + '">' + selectorOptions[i] + '</option>');
    }

    //als er op de button geklikt wordt, wordt de selector op de pagina getest door er de class test-class aan toe te voegen
    $('#test').click(function (event)
    {
        var selector = selObj.val();
        if ($(selector).length == 0)
        {
            alert('Er wordt niets geselecteerd met de selector $("' + selector + '")');

        } else
        {
            $('*').removeClass('test-class');
            $(selector).addClass('test-class');
            
        }
        return false;
    });

});   //einde van document.ready

