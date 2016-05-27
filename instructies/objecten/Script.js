//declareren en initialiseren

var Ralphie = 
{
    voornaam: 'Ralphie',
    achternaam: 'Gijsbrechts',
    email: 'r.gijsbrechts@kw1c.nl'
};

var Jan =
{
    voornaam: 'Jan',
    achternaam: 'Smit',
    email: 'jsmit@live.nl'
};

var contacten = [Ralphie, Jan];


// function voor persooninformatie ophalen
function printPersoon(persoon)
{
    document.getElementById('contacten').innerHTML += '<h3>Contact: ' + persoon.voornaam + '</h3>' + 'Voornaam: ' + persoon.voornaam + '<br />' + 'Achternaam: ' + persoon.achternaam + '<br />' + 'e-mail: ' + persoon.email;
}

// alle personen ophalen
function lijst()
{
    document.getElementById('contacten').innerHTML = "";
    // alle objecten doorlopen
    for (i = 0; i < contacten.length; i++ ) 
    {
        printPersoon(contacten[i]);
        document.getElementById('contacten').innerHTML += '<br />' + '<br />';
    }
}

// persooontoevoegen
function PrsAdd()
{
    contacten[contacten.length] =
    {
        voornaam: document.getElementById('vnaam').value,
        achternaam: document.getElementById('anaam').value,
        email: document.getElementById('email').value
    };
}

function prsSearch()
{
    for (i = 0; i < contacten.length; i++ ) 
    {
        var anaam = document.getElementById('anaam').value
        if(anaam == contacten[i].achternaam)
        {
            printPersoon(contacten[i]);
            document.getElementById('contacten').innerHTML += '<br />' + '<br />'; 
        }
    }
}