let btn = document.querySelector('button'),
    val = document.querySelector('.value');
function isNumber(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0); }
    function isInteger(num) {
        return (num ^ 0) === num;
      }
    btn.addEventListener('click', function(){
        let price= +document.querySelector('.price').value,
        quantity = +document.querySelector('.quantity').value,
        product = +document.querySelector('.product').value,
        table =  document.querySelector('table'),
        elements = document.getElementsByTagName('tr');
        if(isNumber(price) && isNumber(quantity) && quantity > 0 && price > 0 && isInteger( quantity)){ 
              let elem = document.createElement('tr'),
            pr =  document.createElement('td'),
            sumVal = 0,
            qua =  document.createElement('td'),
            sum =  document.createElement('td'),
            g = document.createElement('td');
            g = elements[product].firstElementChild;
            pr.textContent = price + '';
            qua.textContent = quantity + '';
            sum.textContent = (price * quantity).toFixed(2) + '';
            elem.appendChild(g);
            elem.appendChild(pr);
            elem.appendChild(qua);
            elem.appendChild(sum);
            elements[product].replaceWith(elem);
        for( let i = 1; i < 5; i++){
                sumVal += +elements[i].lastElementChild.textContent.toFixed(2);
            } 
            val.textContent = sumVal.toFixed(2);
       
        }else{
            alert('Не правильный ввод');
        }  
 
    });