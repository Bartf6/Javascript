function formulierValideren(form) /* spatie tussten function en formuliervalideren toegevoegd*/
{
    // Gebruikersnaam controleren
    with (form.gebruikersnaam) {
        if (value == '' || value == null) {
            alert('Een gebruikersnaam invullen is verplicht');
            return false;
        }
    }

    // wachtwoord controleren
    with (form.wachtwoord) {
        if (value == '' || value == null) {
            alert('Een wachtwoord opgeven is verplicht');
            return false;
        }
    }

    // e-mailadres controleren
    with (form.email) {
        // eerst controleren of het veld is ingevuld
        if (value == '' || value == null) /* een extra = toegevoegd*/
        {
            alert('Een e-mailadres opgeven is verplicht'); /* een ) toegevoegd zodat het werkt*/
            return false;
        }

        // het format van het e-mailadres (eenvoudig) controleren
        var positieAt = value.indexOf('@');
        var positiePunt = value.indexOf('.');
        if (positieAt < 1 || positiePunt < 2) /* positieAt verwijderd omdat het 1 keer teveel was neergezet*/
        {
            alert('Dit is geen geldig e-mailadres');
            return false;
        }
    }

    // indien hier aangekomen: alle controles OK
    return true;
}
/* einde function formulierValideren() */