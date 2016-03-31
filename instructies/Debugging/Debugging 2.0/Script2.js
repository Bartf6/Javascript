var aantal = 1;
var prijs = 32;
var totPrijs = aantal * prijs;
var teller = 0
while (aantal < 10)
{
	aantal--;
	totPrijs += (prijs*aantal) + aantal;
	aantal += 2;
	teller++;
}
    console.log('prijs' + prijs + ' totprijs' + totPrijs + ' aantal' + aantal + ' teller' + teller);