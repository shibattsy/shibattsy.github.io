//Округлить дробные значения градусов, добавить обратный ход
let btn = document.querySelector('button');
function isNumber(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0); }
btn.addEventListener('click', function(){
    let start = +document.querySelector('.start').value,
    finish = +document.querySelector('.finish').value,
    step = +document.querySelector('.step').value,
    func = document.querySelector('.func').value,
    table =  document.querySelector('table');
   
if(start >= 0 && finish <= 360 && isNumber(start) && isNumber(finish) && start<finish && step > 0 && step<(finish - start)){ 
    let newWin = window.open('table.html');
    newWin.onload = function() {
    let  table2 = newWin.document.querySelector('table');
    while(start < finish){
         
        let elem = document.createElement('tr'),
            g = document.createElement('td'),
            r = document.createElement('td'),
            test = document.createElement('div'),
            f = document.createElement('td');
            g.textContent = start.toFixed(2) +'';
            r.textContent = (start*Math.PI/180).toFixed(3) + '';
            f.textContent = eval('Math.' + func + '(' + (start*Math.PI/180) + ')' + '.toFixed(3)'  ) + '';
            if(func === 'tan' && (start == 90 || start == 270) )
                {
                    f.textContent = 'Не существует';
                }
            test.textContent = 'test';
            elem.appendChild(g);
            elem.appendChild(r);
            elem.appendChild(f);
            table2.appendChild(elem);
            
            start+=step;
    }
};
    }else if(start >= 0 && finish <= 360 && isNumber(start) && isNumber(finish) && start>finish && step < 0 && step>(finish - start)){
        let newWin = window.open('table.html');
        newWin.onload = function() {
        let  table2 = newWin.document.querySelector('table');
        while(start > finish){
            console.log('done');
            let elem = document.createElement('tr'),
                g = document.createElement('td'),
                r = document.createElement('td'),
                test = document.createElement('div'),
                f = document.createElement('td');
                g.textContent = start.toFixed(3) +'';
                r.textContent = (start*Math.PI/180).toFixed(3) + '';
                f.textContent = eval('Math.' + func + '(' + (start*Math.PI/180) + ')' + '.toFixed(3)'  ) + '';
                if(func === 'tan' && (start == 90 || finish == 270) )
                    {
                        f.textContent = 'Не существует';
                    }
                test.textContent = 'test';
                elem.appendChild(g);
                elem.appendChild(r);
                elem.appendChild(f);
                table2.appendChild(elem);
                
                start+=step;
        }
    };
    }else{
        alert('Не правильный ввод');
        }
});