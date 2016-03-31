var snelheid = 0;
var vervoer = "";
var weg = "";

function getWaardes() 
{
    snelheid = $('snelheid').val();
    weg = $('input[name=weg]:checked').val();
    vervoer = $('input[name=vervoer]:checked').val();
}

function wijzigSnelheid() 
{
    getWaardes();
    alert('plek: ' + weg);
    alert('vervoer: ' + vervoer);
    alert('snelheid: ' + snelheid);
}