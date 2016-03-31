// declareren en initialiseren van variablen
//var uur = new Date().getHours();

//alert(uur);

//if (uur < 12)
//{
//    dagdeel = 'ochtend';
//}
//else if (uur < 18)
//{
//    dagdeel = 'middag';
//}
//else if (uur < 24)
//{
//    dagdeel = 'avond';
//}

//alert(dagdeel);


// declareren en initialiseren van variabelen
//var dag = new Date().getDay();
//var week = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
//var huidigeDag = week[dag];

//alert(huidigeDag);

//if (dag == 0 || dag == 6)
//{
//    document.write('HET IS TIJD VOOR BIER');
//}
//else
//{
//    document.write('Maak je geen zorgen bijna tijd voor bier');
//}


// declareren en initialiseren van variabelen
var uur = new Date().getHours();
var minuten = new Date().getMinutes();
var uurENG = uur - 1;
var dagdeel

if (minuten < 10)
{
    document.write('de nederlandse tijd is: ' + uur + ':' + 0 + minuten + '<br />');
}
else
{
    document.write('de nederlandse tijd is: ' + uur + ':' + minuten + '<br />');
}


if (uur == 0)
{
    uurENG = 11;
}

if (uur > 12)
{
    uurENG -= 12;
    dagdeel = 'PM';
}
else
{
    dagdeel = 'AM';
}


document.write('de engelse tijd is: ' + uurENG + ':' + minuten + ' ' + dagdeel);    