// het declareren en initialiseren van de variabelen
var Fout = 'Dit is niet mogelijk';
var invoer;
// hier word de regex geselecteerd dit komt later terug in een if else statement
var re = /[0-9*@#$!%^&()]/;

function ophaal()
{
    invoer = document.getElementById('stringInvoer').value;
}

function naarHoofdNaarKlein()
{
    // functie ophaal() in deze function importeren
    ophaal();
    // het declareren en initialiseren van de variabelen
    var upper = invoer.toUpperCase();
    var lower = invoer.toLowerCase();
    var radio1 = document.getElementById('upper').checked;

    // in deze if else zit de regex hier willen ze dat als de regex erin zit dat het niet werkt
    if (invoer == '' || invoer == null || isNaN(invoer) == false || re.test(invoer))
    {
        document.getElementById('resultaat').innerHTML = Fout;  
    }
    else
    {
        if (radio1 == true)
        {
            document.getElementById('resultaat').innerHTML = upper;
        }
        else
        {
            document.getElementById('resultaat').innerHTML = lower;
        }   
    }
}

function bepaalIndex()
{
    // ophalen van functie ophaal() zodat invoer in deze function gebruikt kan worden
    ophaal()
    // het declareren en initialiseren van de variabelen
    var plaats = document.getElementById('letterInvoer').value;
    var plek = invoer.indexOf(plaats);
    // if else kijkt of plek gelijk is aan -1
    if (plek == -1)
    {
        document.getElementById('resultaat').innerHTML = Fout;
    }
    else
    {
        document.getElementById('resultaat').innerHTML = plek + 1;
    }
}

function substring()
{
    // ophalen van functie ophaal() zodat invoer in deze function gebruikt kan worden
    ophaal()
    // het declareren en initialiseren van de variabelen
    var plek1 = document.getElementById('substringVan').value;
    var plek2 = document.getElementById('substringTot').value;
    var string = invoer.substring(plek1, plek2);

    // if else kijkt of plek1 groter is of gelijk aan is aan plek2
    if (plek1 >= plek2)
    {
        document.getElementById('resultaat').innerHTML = Fout;
    }
    else
    {
        document.getElementById('resultaat').innerHTML = string;
    }
}

function Replace()
{
    // ophalen van functie ophaal() zodat invoer gebruikt kan worden in deze functie
    ophaal()
    // het declareren en initialiseren van de variabelen
    var vervang = document.getElementById('vervang').value;
    var vervangvoor = document.getElementById('vervangVoor').value;
    var New = invoer.replace(vervang, vervangvoor);

    // kijken of vervang het zelfde is als deze statement
    if (vervang == '' || re.test(invoer))
    {
        document.getElementById('resultaat').innerHTML = Fout;
    }
    else
    {
        document.getElementById('resultaat').innerHTML = New;
    }
}

function red()
{
    // zorgen dat de kleur van de pagina word veranderd
    document.body.style.backgroundColor = "red";
    document.body.style.color = "red";
}

function orange()
{
    // zorgen dat de kleur van de pagina word veranderd
    document.body.style.backgroundColor = "orange";
    document.body.style.color = "orange";
}

function green()
{
    // zorgen dat de kleur van de pagina word veranderd
    document.body.style.backgroundColor = "green";   
    document.body.style.color = "green"; 
}

function blue()
{
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "blue";    
}