import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_LO7hfm52BG87WOGdmrI10l1vJtaHJpK2EQU7Hhml');


convertCurrency('INR','USD',10);
 export async function convertCurrency(fromcurrency ,toCurrency,units){
 const res= await freecurrencyapi.latest({
    base_currency: fromcurrency,
    currencies: toCurrency
});
const multiplier =res.data[toCurrency];
 return multiplier*units;
 }

