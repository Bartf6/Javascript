// het declareren en initialiseren van variabelen
var leeftijd;
var abboja;
var abbonee;
var dag;
var baden;
var re = /[!@#$%^&]/;

function getInfo()
{
    // met getInfo() halen we de value's en checkeds op van de variabelen in js en de id's in html
    leeftijd = document.getElementById('leeftijd').value;
    abboja = document.getElementById('abboja').checked;
    abbonee = document.getElementById('abbonee').checked;
    dag = document.getElementById('dagkaart').checked;
    baden = document.getElementById('badenkaart').checked;
}

function bepaalPrijs()
{
    // getInfo() aanroepen om te zorgen dat die in deze functie gebruikt kan worden
    getInfo();

    //alert(leeftijd);
    //alert(abboja);
    //alert(abbonee);
    //alert(dag);
    //alert(baden);

    if (leeftijd == '' || leeftijd < 0 || leeftijd > 130 || re.test(leeftijd)) 
    {
        document.getElementById('resultaat').innerHTML = 'Voer een nummer in';
    }
    else 
    {
        // hier wordt de prijs bepaald we beginnen met de dagkaart
        if (leeftijd <= 13 && dag == true) 
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €2.50';
        }
        else if (leeftijd > 13 && leeftijd <= 19 && dag == true) 
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €3.50';
        }
        else if (leeftijd > 19 && dag == true) 
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €4.50';
        }

        // hier beginnen we met de baden kaart
        else if (leeftijd <=13 && baden == true)
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €20.00';
        }
        else if (leeftijd > 13 && leeftijd <= 19 && baden == true) 
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €30.00';
        }
        else if (leeftijd > 19 && baden == true) 
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €40.00';
        }

        // hier rekenen we de abbonnement prijs uit
        else if (leeftijd <=13 && abboja == true)
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €60.00';
        }
        else if (leeftijd > 13 && leeftijd <= 19 && abboja == true) 
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €90.00';
        }
        else if (leeftijd > 19 && abboja == true) 
        {
            document.getElementById('resultaat').innerHTML = 'de prijs is €120.00';
        }
    }
}

//var loop1 = [];

for (i = 1; i < 20; i++)
{
    if (i >= 11  && i < 20)
    {
        i++;
        console.log(i);
    } else {
        console.log(i);
    }
    
}