/*Разные объекты для вращения, вводить радиус, вращение по частовой и противчас	*/ 
let start=document.querySelector('.start'),
	stop = document.querySelector('.stop'),
	radius =document.querySelector('.rad'),
	reverse = document.querySelector('.reverse'),
	figure = document.querySelector('.figure'),
	checkR = 0,
	flex,
	elem = document.querySelector('.css'),
	elemClass=elem.classList,
	check = 0;  
	let sp = {
		radius  :     250, 
		speed   :     20  
	},
	f = 0,
	s = 2 * Math.PI / 180; 
	function isNumber(n) { 
		return !isNaN(parseFloat(n)) && !isNaN(n - 0); }
radius.addEventListener('change', function(){
	if(radius.value<40 ||!(isNumber(radius.value))||radius.value>350){
		alert("Неправильный ввод");
		radius.value=250;
	}else{
		sp.radius=+radius.value;
	}
});
figure.addEventListener('change', function(){
	elem.classList.remove(elemClass);
	elemClass=figure.value;
	elem.classList.add(figure.value);	
});
reverse.addEventListener('click', function(){
	check=1;
	if(checkR==0){
		checkR=1;
		clearInterval(flex);
		flex = setInterval(function() {  
			f -= s; 
			  elem.style.left =  235 + sp.radius *Math.sin(f)  + 'px'; 
			  elem.style.top =   235 + sp.radius *Math.cos(f)  + 'px';
		}, sp.speed);
	}else{
		checkR=0;
		clearInterval(flex);	
		flex = setInterval(function() {  
			f += s; 
			  elem.style.left =  235 + sp.radius *Math.sin(f) + 'px'; 
			  elem.style.top =   235 + sp.radius *Math.cos(f) + 'px';
	 
		}, sp.speed);
	}
});
start.addEventListener('click', function(){
if(radius.value != 0 && check == 0){
	check=1;
	flex = setInterval(function() {  
		f += s; 
		  elem.style.left =  235 + sp.radius *Math.sin(f) + 'px'; 
		  elem.style.top =   235 + sp.radius *Math.cos(f) + 'px';
		
	}, sp.speed);
	
}
});
stop.addEventListener('click', function(){
	    check=0;
		clearInterval(flex);
	
});

