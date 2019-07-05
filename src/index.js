// PLEASE DON'T change function name 
module.exports = function makeExchange(currency) {
   let exchangeObject = {};

  if (currency > 10000) {
    return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
  } 
  else if (currency <= 0) {
    return exchangeObject;
  }

  if (currency / 50 >= 1) {
    exchangeObject.H = Math.floor(currency / 50);
    currency -= exchangeObject.H * 50;
  }
  if (currency / 25 >= 1) {
    exchangeObject.Q = Math.floor(currency / 25);
    currency -= exchangeObject.Q * 25;
  }
  if (currency / 10 >= 1) {
    exchangeObject.D = Math.floor(currency / 10);
    currency -= exchangeObject.D * 10;
  }
  if (currency / 5 >= 1) {
    exchangeObject.N = Math.floor(currency / 5);
    currency -= exchangeObject.N * 5;
  }
  if (currency >= 1) {
    exchangeObject.P = currency;
  }
  return exchangeObject;

}
