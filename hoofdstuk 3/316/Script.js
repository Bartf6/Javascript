var leerlingen = ['Mohammed', 'Tolga', 'Adem', 'Thomas', 'Jean'];

// wegschrijven eerste leerling
document.write('<p>De eerste leerling is <strong>');
document.write(leerlingen[0] + '</strong></p>');

// wegschrijven laatste leerling in de lijst
document.write('<p>De laatste leerling in de lijst is: <strong>');
document.write(leerlingen[leerlingen.length - 1] + '</strong></p>');

// wegschrijven tweede leerling in de lijst
document.write('<p>De tweede leerling in de lijst is: <strong>');
document.write(leerlingen[1] + '</strong></p>');

// wegschrijven van de een na laatste leerling in de lijst
document.write('<p>De voorlaatste leerling in de lijst is: <strong>');
document.write(leerlingen[leerlingen.length - 2] + '</strong></p>');

// nick en mike worden toegevoegd
leerlingen.unshift('mike');
leerlingen.unshift('nick');

// wegschrijven eerste leerling na het toevoegen
document.write('<p>De eerste leerling is <strong>');
document.write(leerlingen[0] + '</strong></p>');