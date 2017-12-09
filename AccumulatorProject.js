var creditCards = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'];

function largestNumber(creditCards){
  var arr = ['st', 'nd', 'rd', 'th']
  var sum = '';
  var string1 = '';
  for (i=0; i<creditCards.length; i++){
    string1 = creditCards[i].split('-');
    console.log(`${i+1}${arr[i]} string`);
    var string1sum = '';
    for (x=0; x<string1.length;x++){
      string1Sum = string1[x].split('');
      console.log(string1Sum);
    }
  }
  return sum;
}

largestNumber(creditCards);
