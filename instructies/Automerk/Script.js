//  Declareren en initialiseren van Globale variabelen
var autos = ["Saab", 'Seat', 'Spyker', 'Porsche', 'Bugatti', 'Skoda', 'Dacia', 'Jaguar', 'Ferrari', 'Aston Martin', 'Nissan', 'Volkswagen', 'Audi', 'BMW', 'Renault', 'Ford', 'Volvo', 'Jeep', 'Range Rover'];
var letter;

// functie om eerste letter te controleren
function checkAuto()
{
    letter = document.getElementById('letter').value;
    letter = letter.toUpperCase();
    re = /[a-z0-9!@#$%^&*()]/;
        
    if (letter == '' || letter == null || letter == isNaN || re.test(letter))
    {
        alert('Voer een Hoofdletter in');
    }
    else
    {
        for (index = 0; index <= autos.length; index++) 
        {
            if (letter == autos[index].charAt(0))
            {
                document.getElementById('resultaat').innerHTML += autos[index] + ', ';
            }
        }
        }
}