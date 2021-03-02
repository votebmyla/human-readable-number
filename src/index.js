module.exports = function toReadable (numb) {
  let number = numb;
  let result = '';
  
  function num(n){
    if (n == 0) {
      return 'zero';
    } else if (n == 1){
      return 'one';
    } else if (n == 2){
      return 'two';
    } else if (n == 3){
      return 'three';
    } else if (n == 4){
      return 'four';
    } else if (n == 5){
      return 'five';
    } else if (n == 6){
      return 'six';
    } else if (n == 7){
      return 'seven';
    } else if (n == 8){
      return 'eight';
    } else if (n == 9){
      return 'nine';
    } else if (n == 10){
      return 'ten';
    } else if (n == 11){
      return 'eleven';
    } else if (n == 12){
      return 'twelve';
    } else if (n == 13){
      return 'thirteen';
    } else if (n == 14){
      return 'fourteen';
    } else if (n == 15){
      return 'fifteen';
    } else if (n == 16){
      return 'sixteen';
    } else if (n == 17){
      return 'seventeen';
    } else if (n == 18){
      return 'eighteen';
    } else if (n == 19){
      return 'nineteen';
    } else if (n == 20){
      return 'twenty';
    } else if (n == 30){
      return 'thirty';
    } else if (n == 40){
      return 'forty';
    } else if (n == 50){
      return 'fifty';
    } else if (n == 60){
      return 'sixty';
    } else if (n == 70){
      return 'seventy';
    } else if (n == 80){
      return 'eighty';
    } else if(n == 90){
      return 'ninety';
    } 
  }
  
  if(number == 0){
    result = num(number);
  }
  
  if(String(number).length == 3){
    result = result + num(Number(String(numb)[0])) + ' hundred' + ' ';
    number = Number(String(numb).slice(-2));
  }
  
  if(String(number).length == 1 && number > 0){
    result = result + num(number);
  } else if(String(number).length == 2){
    if(number >= 10 && number < 20){
      result = result + num(number);
    } else if(number >= 20){
      result = result + num(Number(String(number).slice(-2,1))*10) + ' ';
      number = Number(String(number).slice(-1))
      if(String(number).length == 1 && number > 0){
        result = result + num(number);
      }
    }
  }
  return result.trim();
}
