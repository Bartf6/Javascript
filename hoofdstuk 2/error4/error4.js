function formulierValideren(form) /* ik heb een f bij function geplaatst want die miste*/
{
// Gebruikersnaam controleren
with (form.gebruikersnaam)
{
	if (value=='' || value==null)
	{
		alert ('Een gebruikersnaam invullen is verplicht');
		return false;
	}
}

// wachtwoord controleren
with(form.wachtwoord)
{
	if(value=='' || value==null)
	{
		alert('Een wachtwoord opgeven is verplicht');
		return false;
	}
}

// e-mailadres controleren
with(form.email)
{
	// eerst controleren of het veld is ingevuld
	if(value == '' || value == null)
	{
		alert('Een e-mailadres opgeven is verplicht');
		return false;
	}
	
	// het format van het e-mailadres (eenvoudig) controleren
	var positieAt = value.indexOf('@');
	var positiePunt = value.indexOf('.'); /* ik heb hier een = verwijderd want anders klopte het niet*/ 
	if(positieAt < 1 || positiePunt - positieAt < 2)
	{
		alert('Dit is geen geldig e-mailadres');
		return false;
	}
}
// indien hier aangekomen: alle controles OK
return true;

}// einde function formulierValideren()