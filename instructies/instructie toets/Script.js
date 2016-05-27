//var getal = 5.5;
//var heelGetal = parseInt(getal);
//var komma = getal - heelGetal;

//if (komma >= 0.5)
//{
//    heelGetal++;
//}


for (i = 5; i <= 70; i += 5)
{
    var getal = i * Math.PI;
    var heelgetal = parseInt(getal);
    var komma = getal - heelgetal;
    var uitkomst;
    if (komma >= 0.5)
    {
        heelgetal++;
    }

    if (heelgetal >= 100) 
    {
        if (i >= 50)
        {
            uitkomst = '<span class="rood">De omtrek van een cirkel met een diameter van ' + '<span class="blauw">' +  i + '</span>' +  ' meter is ' + heelgetal + ' meter.</span><br />';
        }
        else
        {
            uitkomst = '<span class="rood">De omtrek van een cirkel met een diameter van ' + i + ' meter is ' + heelgetal + ' meter.</span><br />';
        }
    }
    else
    {
        uitkomst = '<span class="blauw">De omtrek van een cirkel met een diameter van ' + i + ' meter is ' + heelgetal + ' meter.</span><br />';
    }
    uitkomst = uitkomst.split('1').join('<span class="groen">1</span>');
    document.write(uitkomst);
}