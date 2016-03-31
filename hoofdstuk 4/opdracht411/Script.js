var opleiding = prompt('Welke opleiding heb je gedaan?');

var ervaring = prompt('hoeveel ervaring heb je?');

if (opleiding == 'MBO' || opleiding == 'mbo' && ervaring <= 1) 
{
    document.getElementById('resultaat').innerHTML = 'je hebt ' + opleiding + ' gedaan en je hebt ' + ervaring + ' jaar ervaring. je bent een junior programeur';
}
else if (opleiding == 'MBO' || opleiding == 'mbo' && ervaring >= 1 && ervaring <= 3) 
{
    document.getElementById('resultaat').innerHTML = 'je hebt ' + opleiding + ' gedaan en je hebt ' + ervaring + ' jaar ervaring. je bent een medior programeur';
}
else if (opleiding == 'MBO' || opleiding == 'mbo' && ervaring > 3) 
{
    document.getElementById('resultaat').innerHTML = 'je hebt ' + opleiding + ' gedaan en je hebt ' + ervaring + ' jaar ervaring. je bent een senior programeur';
}
else if (opleiding == 'HBO' || opleiding == 'hbo' && ervaring <= 0.5) 
{
    document.getElementById('resultaat').innerHTML = 'je hebt ' + opleiding + ' gedaan en je hebt ' + ervaring + ' jaar ervaring. je bent een junior programeur';
}
else if (opleiding == 'HBO' || opleiding == 'hbo' && ervaring >= 0.5 && ervaring <= 2) 
{
    document.getElementById('resultaat').innerHTML = 'je hebt ' + opleiding + ' gedaan en je hebt ' + ervaring + ' jaar ervaring. je bent een medior programeur';
}
else if (opleiding == 'HBO' || opleiding == 'hbo' && ervaring > 2) 
{
    document.getElementById('resultaat').innerHTML = 'je hebt ' + opleiding + ' gedaan en je hebt ' + ervaring + ' jaar ervaring. je bent een senior programeur';
}