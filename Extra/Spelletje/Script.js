// declareren en initialiseren van variabelen
var score = 0;
var highscore = [0,0,0];

// maken van function start
function Start()
{
    // een duratie geven aan de button hoelang die visible is
    setTimeout(Einde, 5000);
    document.getElementById('button').style.visibility = "visible";
}

function klik()
{
    // elke keer als je op de button klikt wordt kom er 1 bij.
    score++;
}

function Einde()
{
    // zodra function Einde() begint wordt de button weer hidden
    document.getElementById('button').style.visibility = "hidden";
    

    // als de score hoger is dan iets in de array van highscore dan wordt de hogere erin gezet
   if (score > highscore[0])
    {
        highscore[0] = score;
        highscore.sort(function (a, b) { return a - b });
        document.getElementById('plek1').innerHTML = highscore[2];
        document.getElementById('plek2').innerHTML = highscore[1];
        document.getElementById('plek3').innerHTML = highscore[0];
    }
    // hier word score weer op nul gezet om opnieuw te spelen
    score = 0;
}
