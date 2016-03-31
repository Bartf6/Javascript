// Variabelen Tekst, Zin1 en Zin2 Declareren en initialiseren
var tekst = "De grote Bossche burgemeester Ton Rombouts geneert zich voor de wijze waarop toeschouwers Jozy Altidore hebben bejegend tijdens de wedstrijd van FC Den Bosch. Dat laat hij weten in een persoonlijk brief aan de AZ-speler.";
var pos1 = tekst.indexOf('.');
var Zin1 = tekst.substr(0, pos1 + 1);
var pos2 = tekst.lastIndexOf('.');
var Zin2 = tekst.substring(pos1 + 1, pos2);

// Zin1 Replacen met andere waardes die worden aangegeven binnen de haken
Zin1 = Zin1.replace("Ton Rombouts", '');
Zin1 = Zin1.replace("Bossche", "BOSSCHE");
Zin1 = Zin1.replace("Jozy Altidore", "De AZ-speler");

// Zin2 Replacen met andere waardes tussen de haken
Zin2 = Zin2.replace("Dat", "Het volgende");
Zin2 = Zin2.replace("de AZ-speler", "de voetballer");

console.log(tekst);
console.log(Zin1);
console.log(Zin2);

document.write(Zin2, Zin1);