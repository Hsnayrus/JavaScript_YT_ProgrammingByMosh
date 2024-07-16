/**
 * If
 * If else
 * If elseif else
 * Switch
 * Ternary(expr ? true : false)
 */
let a = prompt("How many items would you like to purchase?");
a = Number.parseInt(a);
if (a < 0) {
  alert("I do not entertain trolls.");
}
let priceToAsk = a > 50 ? 18 : 20;
if (a < 10) {
  alert("I am a wholeseller, that quantity offends me.");
} else if (a >= 10 && a < 20) {
  alert("20 is the minimum quantity for me to give you a wholesale price.");
} else {
  alert("Please pay $" + a * priceToAsk + " at the billing counter");
}

// switch (a) {
//   case a < 10:
//     alert("I am a wholeseller, that quantity offends me.");
//     break;
//   case a >= 10 && a < 20:
//     alert("20 is the minimum quantity for me to give you a wholesale price.");
//     break;
//   default:
//     let priceToAsk = a > 50 ? 18 : 20;
//     alert("Please pay $" + a * priceToAsk + " at the billing counter");
//     break;
// }
